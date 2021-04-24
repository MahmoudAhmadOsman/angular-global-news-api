import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PodcastService {

  constructor(private http: HttpClient) { }


//Get all podcasts
  getPodCastList(): Observable<any> {
    const baseUrl = "/assets/data/podcast.json";
    return this.http.get(baseUrl)
      .pipe(catchError(this.handleError))
      
  }

  handleError(error) {
    return throwError(error.message || "Server Error  Occurred!")
  }
}
