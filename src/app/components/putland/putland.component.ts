import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-putland',
  templateUrl: './putland.component.html',
  styleUrls: ['./putland.component.scss']
})
export class PutlandComponent implements OnInit {


  public states: [];

  constructor(private putland: StateService) {
    putland.getAllStates().subscribe((data) => {
      this.states = data;
      console.log("List of Putland Data: ", data);
    }, (error) => {
      console.log("An error has occured: ", error.message);

    })

  }

  ngOnInit(): void {
  }

}
