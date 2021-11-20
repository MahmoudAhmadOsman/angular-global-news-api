import { NewsapiService } from './../../services/newsapi.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {

  public newsDetails: any;
 public errorMessage: [];
  constructor(private route: ActivatedRoute, private newsapi: NewsapiService) { }

  ngOnInit(): void {
    console.log("Pramiterized Router: ", this.route.snapshot.params['id'])
   
    //Get blog details by its id
    const id = this.route.snapshot.params['id'];

    this.newsapi.getNewsByTitle(id).subscribe(async data => {
      console.log("News Details: ", data)
      this.newsDetails.source = await data;
      
    }, (error: any) => {
       this.errorMessage =  error.message
    
      console.log("News Details Error: ", error.message)
    })
  }

}
