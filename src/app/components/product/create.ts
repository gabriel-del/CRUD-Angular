import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-create',
  template: `
  <p>Create Works!</p>
  `
})
export class Create implements OnInit{
  constructor(private productService: ProductService) {  }



  ngOnInit(): void {
    this.productService.showOnConsole('Teste...123')
    console.log(this.productService.array)
    
  }
}
