import { Injectable } from "@angular/core";
import { Contact } from "../model/Contact";

@Injectable()
export class ContactService{
    Contacts : Contact[] = 
    [
        new Contact('Paul', 'Smith', 'paul@example.com',  5451451457, false, 1),
        new Contact('Peter', 'Jones', 'peter@example.com',  5451451457, false, 2),
        new Contact('Harry', 'Taylor', 'taylor@example.com',  5451451457, false, 3),
        new Contact('Frank', 'Williams', 'paul@example.com',  5451451457, false, 4),
        new Contact('Alfred', 'Brown', 'brown@example.com',  5451451457, false, 5)
    ];

    getContacts(){
        return this.Contacts;
    }
    addContact(contact : Contact){
        contact.id = Math.max.apply(Math,this.Contacts.map(function(o){return o.id;})) + 1;
        this.Contacts.push(contact);
    }
    deleteContact(id : number){
        this.Contacts.splice(this.Contacts.map(function(item) { return item.id; }).indexOf(id), 1);
    }
    // editContact(contact: Contact) {
    //     debugger;
    //     this.Contacts.splice(this.Contacts.map(function(item) { return item.id; }).indexOf(contact.id), 1);
    //     this.Contacts.push(contact);
    // }
}