import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-hirshabelle',
  templateUrl: './hirshabelle.component.html',
  styleUrls: ['./hirshabelle.component.scss']
})
export class HirshabelleComponent implements OnInit {

  public states: [];

  constructor(private hirshabelle: StateService) {
    hirshabelle.getAllStates().subscribe((data) => {
      this.states = data;
      console.log("List of hirshabelle Data: ", data);
    }, (error) => {
      console.log("An error has occured: ", error.message);

    })

  }

  ngOnInit(): void {
  }

}
