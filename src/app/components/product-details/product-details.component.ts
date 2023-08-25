import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
   product!: Product;

  constructor(private _activatedRoute: ActivatedRoute,
                  private _productService: ProductService
    ){}

  ngOnInit() {
   this._activatedRoute.paramMap.subscribe(params => {
    const id: number = +params.get(`id`)!;
    this.getProductInfo(id);
   })
    
  }

  getProductInfo(productId: number){
    this._productService.get(productId).subscribe(
      data =>{
        this.product = data;
      }
    )
  }

  


}
