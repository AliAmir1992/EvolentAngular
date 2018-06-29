import { Component, OnInit } from "@angular/core";
import { BsModalRef } from "ngx-bootstrap/modal";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ContactService } from "../contact/contact.service";
import { Contact } from "../model/Contact";

@Component({
    selector: 'modal-content',
    templateUrl: './modal-content.component.html',
})

export class ModalContentComponent implements OnInit {
    EMAIL_REGEXP = /^\s*[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)\s*$/i;
    title: string;
    operation: string;
    myForm: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    phoneNo: FormControl;
    status: FormControl;
    contact : Contact;
    statusList = ["Active", "InActive"]
    constructor(public bsModalRef: BsModalRef, private dataService : ContactService) { }

    ngOnInit() {
        
        this.operation == "add" ? this.contact = new Contact() : this.contact = this.dataService.inEditContact;

        this.firstName = new FormControl('', [
            Validators.required,
            Validators.pattern("[a-zA-Z][a-zA-Z\\s]+$")
        ]);
        this.lastName = new FormControl('', [
            Validators.required,
            Validators.pattern("[a-zA-Z][a-zA-Z\\s]+$")
        ]);
        this.email = new FormControl('', [
            Validators.required,
            Validators.pattern(this.EMAIL_REGEXP)
        ]);
        this.phoneNo = new FormControl('', [
            Validators.required,
            Validators.pattern("[0-9]{10}$")
        ]);
        this.status = new FormControl('', Validators.required);
        this.myForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNo: this.phoneNo,
            status: this.status
        });
    }
    saveContact(){
        this.bsModalRef.hide();
        this.contact.status = this.status.value == "Active" ? true : false;
        this.operation == "add" ? this.dataService.addContact(this.contact) : this.dataService.editContact(this.contact);
    }
}