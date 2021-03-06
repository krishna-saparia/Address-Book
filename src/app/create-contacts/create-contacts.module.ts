import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateContactsPageRoutingModule } from './create-contacts-routing.module';

import { CreateContactsPage } from './create-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateContactsPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [CreateContactsPage]
})
export class CreateContactsPageModule { }
