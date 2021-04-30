import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-somaliland',
  templateUrl: './somaliland.component.html',
  styleUrls: ['./somaliland.component.scss']
})
export class SomalilandComponent implements OnInit {

  public states: [];

  constructor(private somaliland: StateService) {
    somaliland.getAllStates().subscribe((data) => {
      this.states = data;
      console.log("List of Somaliland Data: ", data);
    }, (error) => {
      console.log("An error has occured: ", error.message);

    })

  }

  ngOnInit(): void {
  }

}
