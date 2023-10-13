import { Component } from '@angular/core';
import { Product } from './model';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  template: `
  <mat-card>
    <mat-card-title>Alterar Produto</mat-card-title>
    <form>
      <mat-form-field><input matInput placeholder="Nome" [(ngModel)]="product.name"name="name"/></mat-form-field>
      <mat-form-field><input matInput placeholder="Preço (R$)" [(ngModel)]="product.price" name="price"/></mat-form-field>
    </form>
    <button mat-raised-button (click)="updateProduct()" color="primary">Salvar</button>
    <button mat-raised-button (click)="cancel()" >Cancelar</button>
  </mat-card>

  <style>
    form {
      display: flex;
      flex-direction: column;
    } button {
      margin: 20px 15px 0px 0px
    }
  </style>
  `,
  styles: [
  ]
})
export class Update {

  
  product!: Product;
  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {  }
  ngOnInit(): void { 
    const id = this.route.snapshot.paramMap.get('id')!
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(): void { 
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado')
      this.router.navigate(['products'])
    })
  }
  cancel(): void { 
    this.router.navigate(['products'])
  }

}
