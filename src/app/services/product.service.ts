import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Product } from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl= "http://localhost:8181/api/v1/products";

  constructor(private httpClient: HttpClient) { }

  getProductsByCategoryId(theCategoryId: number): Observable<Product[]>{
    const searchUrl = `${this.baseUrl}/search/categoryid?id=${theCategoryId}&size=100`;
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(
      map(response => response._embedded.products ),
      catchError(error => {
        console.error('Error fetching products:', error);
        return [];
      })

    );
  }

  getAllProducts(): Observable<Product[]>{
    return this.httpClient.get<GetResponseProducts>(this.baseUrl).pipe(
      map(response => response._embedded.products )

    )
  }

}

interface GetResponseProducts{
_embedded:
{
  products: Product[];
}
}
