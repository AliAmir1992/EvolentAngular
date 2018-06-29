import { Injectable } from "@angular/core";
import { Contact } from "../model/Contact";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class ContactService{
    inEditContact : any;
    Contacts : Contact[] = 
    [
        new Contact('Paul', 'Smith', 'paul@example.com',  5451451457, false, 1),
        new Contact('Peter', 'Jones', 'peter@example.com',  5451451457, false, 2),
        new Contact('Harry', 'Taylor', 'taylor@example.com',  5451451457, true, 3),
        new Contact('Frank', 'Williams', 'paul@example.com',  5451451457, false, 4),
        new Contact('Alfred', 'Brown', 'brown@example.com',  5451451457, true, 5)
    ];
    subject = Observable.of(this.Contacts);

    getContacts(){
        return this.subject;
    }

    addContact(contact : Contact){
        contact.id = Math.max.apply(Math,this.Contacts.map(function(o){return o.id;})) + 1;
        this.Contacts.push(contact);
    }

    deleteContact(id : number){
        this.Contacts.splice(this.Contacts.map(function(item) { return item.id; }).indexOf(id), 1);
    }

    inEditContactDetails(contact: Contact) {
        this.inEditContact = new Contact(contact.firstName,contact.lastName,contact.email, contact.phoneNo, contact.status, contact.id);
    }

    getinEditContactDetails(): Contact {
        return this.inEditContact;
    }
    
    editContact(contact: Contact) {
        this.Contacts[this.Contacts.map(function(item) { return item.id; }).indexOf(contact.id)] = contact;
    }
}