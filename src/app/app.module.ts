import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app.routing';
import { ContactService } from './contact/contact.service';
import { ModalContentComponent } from './_shared/modal-content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent,
    ContactComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    AppRoutingModule
  ],
  entryComponents: [ModalContentComponent],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
