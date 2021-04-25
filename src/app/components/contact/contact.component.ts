import { Component, OnInit } from '@angular/core';
 
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  username = new FormControl("");
  fullName = new FormControl("");


  constructor() { }

  ngOnInit(): void {
  }


//Reset form values 
  reset() {
    this.username.reset();
    this.fullName.setValue("")
  }



}
