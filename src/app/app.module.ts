import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopMenuComponent } from './top_menu/top.menu.component';
import { ProductComponent } from './product-list/product.component';
import { ProductAlertComponent } from './product-alert/product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ProductsService } from './products.service';
import { ProductsResolverService } from './products-resolver.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
      { path: '', component: ProductComponent, resolve: {products: ProductsResolverService} },
      { path: 'products/:productId', component: ProductDetailsComponent },
      {path: 'cart', component: CartComponent}
    ])],
  declarations: [ AppComponent, HelloComponent, TopMenuComponent, ProductComponent, ProductAlertComponent, ProductDetailsComponent, CartComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ProductsService, ProductsResolverService]
})
export class AppModule { }
