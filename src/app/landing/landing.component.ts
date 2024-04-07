
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  getproduct: any = [];

  constructor(
    private httpClient: HttpClient,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllProduct();
  }

  private getAllProduct(){
    this.productService.getAllProduct().subscribe(data => {
      console.log(data);
      this.getproduct = data;
    });
  }

  goToProduct(pid: any): void {
    this.router.navigate(["detail/" + pid]);
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string): void {
    this.searchText = searchValue;
    console.log(this.searchText);
  }

  deleteProduct(pid: number): void {
    console.log(pid); 
    this.productService.deleteProduct(pid).subscribe((res) => {
      console.log(res); 
      this.getAllProduct(); 
    });
  }
}
