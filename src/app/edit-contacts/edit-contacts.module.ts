import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditContactsPageRoutingModule } from './edit-contacts-routing.module';

import { EditContactsPage } from './edit-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditContactsPageRoutingModule
  ],
  declarations: [EditContactsPage]
})
export class EditContactsPageModule { }
