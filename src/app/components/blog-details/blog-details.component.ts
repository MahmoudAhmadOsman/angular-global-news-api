import { ActivatedRoute } from '@angular/router';
import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {

  public blogDetails: any;
  constructor(private blogService: BlogService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.showBlogDetails();
   
  }
  //Show blog details
  showBlogDetails() {
       console.log(this.route.snapshot.params["id"])
    const id = this.route.snapshot.params["id"];
    this.blogService.getBlogById(id).subscribe(data => {
      console.log(data)
      this.blogDetails = data;
      
    }, (error) => {
      console.log("Can't get blog details:", error.message)
    })
  }


 

}
