import { Component, OnInit } from '@angular/core';
import { ContactService } from './contact.service';
import { Contact } from '../model/Contact';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalContentComponent } from '../_shared/modal-content.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  bsModalRef: BsModalRef;
  constructor(private contactService : ContactService, private modalService: BsModalService) { }

  Contacts : Contact[];
  ngOnInit() {
    this.Contacts = this.contactService.getContacts();
  }
  openAddModal() {
    const initialState = {
      title: 'Add Contact',
      method : 'add'
    };
    this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
    this.bsModalRef.content.modalType = 'add';
  }
  // openEditModal(contact : Contact) {
  //   const initialState = {
  //     contact : contact,
  //     title: 'Edit Contact',
  //     method : 'edit'
  //   };
  //   this.bsModalRef = this.modalService.show(ModalContentComponent, {initialState});
  // }
  deleteContact(id : number){
    this.contactService.deleteContact(id);
  }
}

