import { MatFormField } from '@angular/material/form-field';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router'
import { Product } from './model';

@Component({
  selector: 'app-create',
  template: `
  <mat-card>
    <mat-card-title>Novo Produto</mat-card-title>
    <form>
      <mat-form-field><input matInput placeholder="Nome" [(ngModel)]="product.name"name="name"/></mat-form-field>
      <mat-form-field><input matInput placeholder="Preço (R$)" [(ngModel)]="product.price" name="price"/></mat-form-field>
    </form>
    <button mat-raised-button (click)="createProduct()" color="primary">Salvar</button>
    <button mat-raised-button (click)="cancel()" >Cancelar</button>
  </mat-card>

  <style>
    form {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    } button {
      margin: 20px 15px 0px 0px
    }
  </style>
  `
})
export class Create implements OnInit{
  constructor(private productService: ProductService, private router: Router) {  }

  product: Product = {
    name: '',
    price: null
  }
  ngOnInit(): void { }

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
