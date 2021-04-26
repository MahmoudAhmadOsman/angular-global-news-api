import { StateService } from './../../services/state.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.scss']
})
export class StatesComponent implements OnInit {

  public states: [];
  public districts: [];
  constructor(private stateService: StateService) {
    stateService.getAllStates().subscribe((data) => {
    
      this.states = data;
      console.log("All Data: ", data);
      
      
      this.districts = data;

      console.log("All Districts", data);

  })

   }

  ngOnInit(): void {
  }

}
