import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-jubaland',
  templateUrl: './jubaland.component.html',
  styleUrls: ['./jubaland.component.scss']
})
export class JubalandComponent implements OnInit {

  

  public states: [];

  constructor(private jubaland: StateService) {
    jubaland.getAllStates().subscribe((data) => {
      this.states = data;
      console.log("List of jubaland Data: ", data);
    }, (error) => {
      console.log("An error has occured: ", error.message);

    })

  }







  ngOnInit(): void {
  }

}
