import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-galmudug',
  templateUrl: './galmudug.component.html',
  styleUrls: ['./galmudug.component.scss']
})
export class GalmudugComponent implements OnInit {

  public states: [];

  constructor(private galmudug: StateService) {

    galmudug.getAllStates().subscribe((data) => {
      this.states = data;
      console.log("List of Galmudug Data: ", data);
    }, (error) => {
      console.log("An error has occured: ", error.message);

    })

  }

  ngOnInit(): void {
  }

}
