import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from '../shared/contacts.service'
@Component({
  selector: 'app-create-contacts',
  templateUrl: './create-contacts.page.html',
  styleUrls: ['./create-contacts.page.scss'],
})
export class CreateContactsPage implements OnInit {

  contactForm: FormGroup;

  constructor(
    private contactService: ContactsService,
    private router: Router,
    public formBuilder: FormBuilder
  ) { }

  public errorMsg = {
    fname: [
      { type: 'required', message: 'First Name is required' },
      { type: 'maxlength', message: 'First Name can\'t be longer than 20 characters.' }
    ],
    lname: [
      { type: 'required', message: 'Last Name is required' },
      { type: 'maxlength', message: 'Last Name can\'t be longer than 20 characters.' }
    ],
    mobile: [
      { type: 'required', message: 'Mobile Number is required' },
      { type: 'pattern', message: 'Please enter a valid phone number.' }
    ],
    email: [
      { type: 'required', message: 'Last Name is required' },
      { type: 'pattern', message: 'Please enter valid email address.' }
    ]
  };


  ngOnInit() {
    debugger;
    this.contactForm = this.formBuilder.group({
      fname: [''],
      // [
      //   Validators.required, Validators.maxLength(20)
      // ]],
      lname: [''],
      // [
      //   Validators.required, Validators.maxLength(20)
      // ]],
      mobile: [''],
      // [
      //   Validators.required, Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$")
      // ]],
      email: [''],
      // [
      //   [Validators.required, Validators.pattern(/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/)]
      // ]]
    })
  }

  formSubmit() {
    debugger;
    if (!this.contactForm.valid) {
      return false;
    }
    else {
      this.contactService.createContact(this.contactForm.value).then(res => {
        debugger;
        this.contactForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }

}
