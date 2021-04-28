import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  public states: [];
  
  constructor(private stateService: StateService) {
    stateService.getAllStates().subscribe(async (data) => {
       this.states =  await  data;
      console.log("List of All Data: ", data);
    }, (error) => {
      console.log("An error has occured: ", error.message);

    })

   }

  ngOnInit(): void {
  }

}
