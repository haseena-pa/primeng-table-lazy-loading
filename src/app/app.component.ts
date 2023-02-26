import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Product, ProductsResponse } from './product';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: Product[] = [];
  totalRecords: number = 0;
  loading: boolean = true;

  constructor(private appService: AppService) { }

  loadProducts($event: LazyLoadEvent) {
    this.loading = true;
    this.appService.getProducts($event.first || 0).subscribe(
      (response: ProductsResponse) => {
        this.loading = false;
        this.products = response.products;
        this.totalRecords = response.total;
      }
    )
  }
}
