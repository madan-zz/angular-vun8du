import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopMenuComponent } from './top_menu/top.menu.component';
import { ProductComponent } from './product-list/product.component';
import { ProductAlertComponent } from './product-alert/product-alert/product-alert.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,  RouterModule],
  declarations: [ AppComponent, HelloComponent, TopMenuComponent, ProductComponent, ProductAlertComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
