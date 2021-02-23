import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() public product: Product;

  constructor() { }

  ngOnInit() {
  }

}
