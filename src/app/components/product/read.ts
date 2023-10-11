import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model';

@Component({
  selector: 'app-read',
  template: `
    <p>
      read works!
    </p>
    <ul>
      <li *ngFor="let product of products">
        {{ product.name }}

      </li>
    </ul>
  `
})
export class Read implements OnInit {
  products!: Product[]

  constructor (private productService: ProductService) {}
  ngOnInit (): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })

  }
}
