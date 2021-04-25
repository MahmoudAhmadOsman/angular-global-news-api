import { Component, OnInit } from '@angular/core';
 
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  fullName = new FormControl("");
  username = new FormControl("");
  email = new FormControl("");
  password = new FormControl("");
  confirmPassword = new FormControl("");


//Grouping form inputs
  userForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      fullName: new FormControl(""),
      username: new FormControl(""),
      email: new FormControl(""),
      password: new FormControl(""),
      confirmPassword: new FormControl(""),

})

  }


//Reset form values 
  reset() {
    //instead of calling email field, call the entire user form
    // this.username.reset();
    // this.fullName.setValue("");
    // this.email.setValue("");
    // this.password.setValue("");
    // this.confirmPassword.setValue("");
    this.userForm.reset()
  }



//Console log the data that is coming from the from
  
  onSubmit() {

    console.log(this.userForm.value);
  }





}
