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
  searchMode!: boolean;

  constructor(private _productService: ProductService,
              private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(()=>
    {
      this.listProducts();
    })

    this.listAllProducts();

  }

  listAllProducts(){
    this._productService.getAllProducts().subscribe(
      data => {
        this.products = data
      }
    )
  }

  listProducts() {
    this.searchMode = this._activatedRoute.snapshot.paramMap.has('keyword');
    
    if(this.searchMode){
      //do search work
      this.handleSearchProducts();
    }else{
      //display products
      this.handleListBooks();
    }
  
  
  }

handleListBooks(){

  this._activatedRoute.paramMap.pipe(
    switchMap(params => {
      this.currentCategoryId = +params.get('id')!;
      return this._productService.getProductsByCategoryId(this.currentCategoryId);
    })
  ).subscribe(data => {
    this.products = data;
  });
}



  handleSearchProducts(){
   const keyword: string = this._activatedRoute.snapshot.paramMap.get('keyword')!;

   this._productService.searchProducts(keyword).subscribe(
    data => {
     this.products = data;
    }
   )

  }







 

  
}