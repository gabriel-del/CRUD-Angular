import { Component } from '@angular/core';
import { Product } from '../model';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  template: `
<mat-card>
    <mat-card-title>Excluir Produto</mat-card-title>
    <form>
      <mat-form-field><input matInput placeholder="Nome" [value]="product.name"name="name" disabled=""/></mat-form-field>
      <mat-form-field><input matInput placeholder="Preço (R$)" [value]="product.price" name="price" disabled=""/></mat-form-field>
    </form>
    <button mat-raised-button (click)="deleteProduct()" color="warn">Deletar</button>
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
  `,
  styles: [
  ]
})
export class Delete {
  product!: Product;
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {  }
  ngOnInit(): void { 
    const id = +this.route.snapshot.paramMap.get('id')!
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void { 
    this.productService.delete(this.product.id!).subscribe(() => {
      this.productService.showMessage('Produto deletado!')
      this.router.navigate(['products'])
    })
  }
  cancel(): void { 
    this.router.navigate(['products'])
  }

}
