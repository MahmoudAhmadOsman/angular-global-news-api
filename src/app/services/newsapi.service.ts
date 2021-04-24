import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  
  constructor(private http: HttpClient) { }

  getNewsList(): Observable<any>{
    // const newsBaseUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b35173cf3f7c41e7aac71253aaeee113";
    return this.http.get("https://newsapi.org/v2/everything?q=apple&from=2021-04-23&to=2021-04-23&sortBy=popularity&apiKey=b35173cf3f7c41e7aac71253aaeee113");
    
  }



  getNewsByTitle(id: number) {
    return this.http.get("https://newsapi.org/v2/everything?q=apple&from=2021-04-23&to=2021-04-23&sortBy=popularity&apiKey=b35173cf3f7c41e7aac71253aaeee113/" + id);
}




 

  
  
  
  
  
  
  
  



}
