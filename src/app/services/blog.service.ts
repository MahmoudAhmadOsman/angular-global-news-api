import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { }

//Gell All Blogs
  getAllBlogs(): Observable<any>{
    const blogURL = "https://stapes-api.onrender.com/blogs/";
    return this.http.get(blogURL);
  }
  


  //Get bloh by its id
  getBlogById(id: number) {
    return this.http.get("https://blogs-api.herokuapp.com/blogs/" + id);
  }




}
