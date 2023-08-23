import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId!: number;

  constructor(private _productService: ProductService,
              private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    
    this._activatedRoute.paramMap.pipe(
      switchMap(params => {
        this.currentCategoryId = +params.get('id')!;
        return this._productService.getProductsByCategoryId(this.currentCategoryId);
      })
    ).subscribe(data => {
      this.products = data;
    });

    this.listProducts();

  }

  listProducts() {
    this._productService.getAllProducts().subscribe(
      data => this.products = data
    )
  }


 

  
}