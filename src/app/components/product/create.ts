import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router'
import { Product } from './model';

@Component({
  selector: 'app-create',
  template: `
  <p>Create Works!</p>
  <button mat-raised-button (click)="createProduct()" color="primary">Salvar</button>
  <button mat-raised-button (click)="cancel()" >Cancelar</button>
  `
})
export class Create implements OnInit{
  constructor(private productService: ProductService, private router: Router) {  }

  product: Product = {
    name: '',
    price: null
  }



  ngOnInit(): void {
    // console.log(this.productService.array)
  }

  createProduct(): void { 
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado')
      this.router.navigate(['products'])
    })
  }
  cancel(): void { 
    this.router.navigate(['products'])
  }
}
