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
  loading = true;
  constructor(private stateService: StateService) {
    stateService.getAllStates().subscribe( (data) => {
      this.states =  data;
      //Set loading to false after data is loaded
      this.loading = false;
      console.log("List of All Data: ", data);
    }, (error) => {
      console.log("An error has occured: ", error.message);
      this.loading = true;

    })

   }

  ngOnInit(): void {
  }

}
