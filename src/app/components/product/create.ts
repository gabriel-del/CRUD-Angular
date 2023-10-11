import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-create',
  template: `
  <p>Create Works!</p>
  <button mat-raised-button (click)="createProduct()" color="primary">Salvar</button>
  `
})
export class Create implements OnInit{
  constructor(private productService: ProductService) {  }



  ngOnInit(): void {
    // console.log(this.productService.array)
  }

  createProduct(): void {
    this.productService.showMessage('Teste...123')
  }
}
