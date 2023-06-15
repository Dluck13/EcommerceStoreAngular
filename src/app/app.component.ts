import { Component } from '@angular/core';
import { Product } from './common/product';
import { Decimal } from 'decimal.js';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  products: Product []=[

    
      {
        sku: "text-100",
        name: "C Programming Language",
        description: "Learn C Programming Language",
        unitPrice: 600.00,
        imageUrl: "assets/images/books/text-100.png",
        active: true,
        unitsInStock: 100,
        createdOn: new Date(),
        updatedOn: new Date(),
       



      }



  ]
 
}
