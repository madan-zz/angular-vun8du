import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {
  @Input() product_price;
  @Output() notifier = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

 onNotify() {
    window.alert('You will be notified locally when the product goes on sale');
  }

}