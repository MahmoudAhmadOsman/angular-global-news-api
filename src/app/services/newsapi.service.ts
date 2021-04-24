import { HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {
  
  constructor(private http: HttpClient) { }

  getNewsList(): Observable<any>{
    const newsBaseUrl = "https://newsapi.org/v2/top-headlines?country=us&apiKey=b35173cf3f7c41e7aac71253aaeee113";
    return this.http.get(newsBaseUrl);
    
  }
}
