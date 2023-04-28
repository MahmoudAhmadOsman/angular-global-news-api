import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient) { }


  getAllProducts(): Observable<any> {
      const baseUrl = "https://stapes-api.onrender.com/products";
    return this.http.get(baseUrl);
  
}






}
