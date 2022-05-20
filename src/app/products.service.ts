import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from './product.model';
import { Response } from './resonse.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = '../assets/products.json';
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Response> {
    return this.httpClient.get<Response>(this.url);
  }

  getProductsById(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((response) => response.products
      .find((product) => product.id === id))
    );
  }
}
