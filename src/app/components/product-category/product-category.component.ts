import { ProductCategory } from 'src/app/common/product-category';
import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  productCategories:  ProductCategory[]= [];

  constructor(private _productService: ProductService){

  }

  ngOnInit(){
    this.listBookCategories();
  }

  listBookCategories(){
    this._productService.getProductCategories().subscribe(
      data => this.productCategories = data
    );
  }

}
