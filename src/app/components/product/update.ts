import { Component, OnInit } from '@angular/core';
import { Product } from '../model';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  template: `
  <mat-card>
    <mat-card-title>Alterar Produto</mat-card-title>
    <form>
      <mat-form-field><input matInput placeholder="Nome" [(ngModel)]="product.name" name="name"/></mat-form-field>
      <mat-form-field><input matInput placeholder="Preço (R$)" [(ngModel)]="product.price" name="price"/></mat-form-field>
    </form>
    <button mat-raised-button (click)="updateProduct()" color="primary">Atualizar</button>
    <button mat-raised-button (click)="cancel()" >Cancelar</button>
  </mat-card>
  `
})
export class Update implements OnInit {
  product: Product = {name: '', price: null}

    constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {  }
  ngOnInit(): void { 
    const id = +this.route.snapshot.paramMap.get('id')!
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  updateProduct(): void { 
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado!')
      this.router.navigate(['products'])
    })
  }
  cancel(): void { 
    this.router.navigate(['products'])
  }

}
