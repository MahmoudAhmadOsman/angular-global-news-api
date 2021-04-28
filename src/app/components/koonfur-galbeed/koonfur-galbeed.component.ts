import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-koonfur-galbeed',
  templateUrl: './koonfur-galbeed.component.html',
  styleUrls: ['./koonfur-galbeed.component.scss']
})
export class KoonfurGalbeedComponent implements OnInit {

  public states: [];
  
  constructor(private konfurGalbeed: StateService) {
     
    konfurGalbeed.getAllStates().subscribe((data) => {
      this.states = data;
      console.log("List of Koonfur Galbeed Data: ", data);
    }, (error) => {
      console.log("An error has occured: ", error.message);

    })

  }

  

  ngOnInit(): void {
  }

}
