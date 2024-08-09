import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable } from 'rxjs';  // Import Observable from rxjs

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // baseUrl = "https://ecoms-k1f4.onrender.com";
  baseUrl = "http://localhost:8081";   

  constructor(private httpClient: HttpClient) { }

   // Modify the method signature to return an Observable
   public getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/all`);
   
  }

    // Modify the method signature to return an Observable
    public addProduct1(productObject: any): Observable<Product> {
      return this.httpClient.post<Product>(`${this.baseUrl}/add`, productObject);
   
    }

  // Modify the method signature to return an Observable
  public getProductById(pid: any): Observable<Product> {
    return this.httpClient.get<Product>(`${this.baseUrl}/get/by/pid/${pid}`);
    // this.getAllProduct();
  }


 // Modify the method signature to return an Observable
 public deleteProduct(pid: any): Observable<Product> {
  return this.httpClient.delete<Product>(`${this.baseUrl}/product/${pid}`);
  // this.getAllProduct();
}

 
}
