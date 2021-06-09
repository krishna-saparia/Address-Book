import { Component, OnInit } from '@angular/core';
import { Contacts } from '../shared/contacts'
import { ContactsService } from '../shared/contacts.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  contacts = []

  constructor(private contactService: ContactsService) { }

  ngOnInit() {
    this.fetchContacts();
    let contactRes = this.contactService.getContactList();
    contactRes.snapshotChanges().subscribe(res => {
      this.contacts = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.contacts.push(a as Contacts);
      })
    })
  }

  fetchContacts() {
    this.contactService.getContactList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deleteContact(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.contactService.deleteContact(id)
    }
  }
}
