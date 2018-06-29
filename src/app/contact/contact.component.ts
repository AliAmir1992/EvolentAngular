import { Component, OnInit, ErrorHandler } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from '../model/Contact';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalContentComponent } from '../_shared/modal-content.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  bsModalRef: BsModalRef;
  Contacts : Contact[];

  constructor(private contactService : ContactService, private modalService: BsModalService) { }
  ngOnInit() {
    this.contactService.getContacts().subscribe(
      data => this.Contacts = data,
      error => this.handleError(error),
    );
  }

  openAddModal() {
    const initialState = {
      title: 'Add Contact',
      operation : 'add'
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.bsModalRef.content.modalType = 'add';
  }

  openEditModal(contact : Contact) {
    this.contactService.inEditContactDetails(contact);
    const initialState = {
      title: 'Edit Contact',
      operation : 'edit'
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
  }

  deleteContact(id : number){
    this.contactService.deleteContact(id);
  }

  handleError(error) {
    console.error('Some error occured : ', error);
  }
}

