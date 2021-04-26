import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  public states: [];
  
  constructor(private stateService: StateService) {
    stateService.getAllStates().subscribe((data) => {
      this.states = data;
      console.log("List of All Data: ", data);
    }, (error) => {
      console.log("An error has occured: ", error.message);

    })

   }

  ngOnInit(): void {
  }

}
