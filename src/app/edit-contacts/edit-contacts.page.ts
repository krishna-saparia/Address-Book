import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { Contacts } from '../shared/contacts'
import { ContactsService } from '../shared/contacts.service'
@Component({
  selector: 'app-edit-contacts',
  templateUrl: './edit-contacts.page.html',
  styleUrls: ['./edit-contacts.page.scss'],
})
export class EditContactsPage implements OnInit {

  updateContactForm: FormGroup;
  id: any;

  constructor(
    private contactService: ContactsService,
    private router: Router,
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.contactService.getContact(this.id).valueChanges().subscribe(res => {
      this.updateContactForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updateContactForm = this.formBuilder.group({
      fname: [''],
      lname: [''],
      mobile: [''],
      email: [''],
    })
    console.log(this.updateContactForm.value)
  }

  updateForm() {
    this.contactService.updateContact(this.id, this.updateContactForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}
