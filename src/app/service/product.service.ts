import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';

@Injectable({

  providedIn: 'root'                                                                                                                                                                                                                                                                                                   
})
export class ProductService {

  // baseUrl = "https://ecoms-k1f4.onrender.com"
  baseUrl = "http://localhost:8081"

  constructor(private httpClient: HttpClient) { }

  public addProduct1(productObject: any) {
    return this.httpClient.post<Product>(this.baseUrl + "/add", productObject);
  }

  public deleteProduct(pid:any){

    return this.httpClient.delete<Product>(this.baseUrl + "/product/"+ pid);
  }
  
  public getProductById(pid:any){
    return this.httpClient.get<Product>(this.baseUrl + "/get/by/pid/"+ pid)
  }

  public getAllProduct(){
    return this.httpClient.get<Product[]>(this.baseUrl + "/all")
  }
}
