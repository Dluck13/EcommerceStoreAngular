import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductService } from './services/product.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes =[
 { path: 'products', component: ProductListComponent},
 { path: 'category/:id', component: ProductListComponent},
 { path: '', redirectTo: '/products', pathMatch: 'full'},
 { path: '**', component: PageNotFoundComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), // Set up routes here

  ],


  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
