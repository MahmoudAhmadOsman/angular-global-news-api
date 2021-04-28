import { Component } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, RouterEvent } from "@angular/router"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //Show loading Indicator
  public showLoadingIndicator = true;
  constructor(private _router: Router) {
    
    //Show Loader Indicator
    this._router.events.subscribe((RouterEvent: Event) => {

      if (RouterEvent instanceof NavigationStart) {
        this.showLoadingIndicator = true;
      }
      if (RouterEvent instanceof NavigationEnd) {
        this.showLoadingIndicator = false;
      }
    })
  }
  

}
