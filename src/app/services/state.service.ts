// Mahmoud Osman
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private http: HttpClient) { }
  getAllStates(): Observable<any>{
    const baseUrl = "https://stapes-api.onrender.com/states/";
    return this.http.get(baseUrl);

}


}
