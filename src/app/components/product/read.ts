import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model';

@Component({
  selector: 'app-read',
  template: `
      <table mat-table [dataSource]="products" class="mat-elevation-z4">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Id</th>
          <td mat-cell *matCellDef="let row">{{row.id}}</td>
        </ng-container>
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let row">{{row.name}}</td>
        </ng-container>
        <ng-container matColumnDef="price">
          <th mat-header-cell *matHeaderCellDef>Preço</th>
          <td mat-cell *matCellDef="let row">{{row.price | currency: 'BRL' }}</td>
        </ng-container>
        <ng-container matColumnDef="action">
          <th mat-header-cell *matHeaderCellDef>Ações</th>
          <td mat-cell *matCellDef="let row">
            <a routerLink="/products/update/{{ row.id }}"><i class="material-icons">edit</i></a>
            <a routerLink=""><i class="material-icons">delete</i></a>
          </td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
      <style>
        a:nth-child(1) { color: #d9cd26; margin-right: 10px;}
        a:nth-child(2) { color: #e35e6b;}
      </style>
  `
})
export class Read implements OnInit {
  products!: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor (private productService: ProductService) {}
  ngOnInit (): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })

  }
}
