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



  getUserById(id: number) {
    // const baseUrl = "https://jsonplaceholder.typicode.com/users/";
    // return this.http.get(`${this.baseUrl}/${id}`);
    return this.http.get("https://jsonplaceholder.typicode.com/users/"+ id);
  }




//   getNewsByTitle(id: number) {
//     return this.http.get("https://newsapi.org/v2/everything?q=apple&from=2021-04-23&to=2021-04-23&sortBy=popularity&apiKey=b35173cf3f7c41e7aac71253aaeee113/" + id);
// }






}
