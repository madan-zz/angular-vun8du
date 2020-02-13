import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products
  constructor(private http: HttpClient) {

  }
  ngOnInit() {
    console.log("on init...");
 this.http.get('http://localhost:8000/products').subscribe((result) => {
   this.products = result;
   console.log(this.products);
    console.log("products...");
 })
    
  }
  
  
  share(name) {
    window.alert(name+'The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/