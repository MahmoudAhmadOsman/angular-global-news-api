import { BlogService } from './../../services/blog.service';
import { Component, OnInit } from '@angular/core';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogs = [];

  constructor(private blogService: BlogService) {

    blogService.getAllBlogs().subscribe(data => {
      console.log("list of blogs", data);
      
      this.blogs = data;
    }, (error) => {
      console.log("Error", error);
})

   }

  ngOnInit(): void {
  }

}
