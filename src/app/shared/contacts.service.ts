import { Injectable } from '@angular/core';
import { Contacts } from './contacts'
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contactListRef: AngularFireList<any>;
  contactRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase, private ngFirestore: AngularFirestore,) { }

  //Create Contact


  createContact(con: Contacts) {
    return this.contactListRef.push({
      fname: con.fname,
      lname: con.lname,
      mobile: con.mobile,
      email: con.email
    })
  }



  // Get single contact

  getContact(id: string) {
    this.contactRef = this.db.object('/contact/' + id);
    return this.contactRef;
  }

  // Get Contact List

  getContactList() {
    this.contactListRef = this.db.list('/contacts');
    return this.contactListRef;
  }

  // Update Contact
  updateContact(id, con: Contacts) {
    return this.contactRef.update({
      fname: con.fname,
      lname: con.lname,
      mobile: con.mobile,
      email: con.email,

    })
  }
  deleteContact(id: string) {
    this.contactRef = this.db.object('/contact/' + id);
    this.contactRef.remove();
  }
}
