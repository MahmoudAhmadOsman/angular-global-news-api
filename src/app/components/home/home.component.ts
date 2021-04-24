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
     
      console.log("ALL NEWS DATA ARRAYS: ", data.articles);

    }, (error) => {
      console.log("An error: ", error);
    })

  }

  //Pramiterized Router



 
 





  ngOnInit(): void {
    // console.log("Pramiterized Router: ", this.route.snapshot.params['title'])
    // const title = this.route.snapshot.params['title'];
  }

}
