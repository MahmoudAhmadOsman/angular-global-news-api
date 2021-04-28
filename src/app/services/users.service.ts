import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }


//Get list of users
  getAllUsers():Observable<any> {
    const baseUrl = "https://jsonplaceholder.typicode.com/users/";
    return this.http.get(baseUrl);
  }


  //Get user by id
  getUserById(id: number) {
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+ id);
  }


}
