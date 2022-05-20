import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url:string = "../assets/products.json"
  constructor(private httpClient: HttpClient ) { }

  getProducts(): Observable<{products:Product[]}>{
    return this.httpClient.get<{products:Product[]}>(this.url)
  }
  
}
