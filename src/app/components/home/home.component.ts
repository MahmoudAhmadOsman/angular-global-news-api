import { NewsapiService } from './../../services/newsapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public news: [];

  constructor(private NewsapiService: NewsapiService) {
    
    NewsapiService.getNewsList().subscribe((data) => {
      this.news = data.articles;
      console.log("ALL NEWS: ", data);

    }, (error) => {
      console.log("An error: ", error);
    })

  }


 
 





  ngOnInit(): void {
  }

}
