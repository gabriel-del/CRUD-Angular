import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './model';

@Component({
  selector: 'app-read',
  template: `
    <div class="mat-elevation-z4">
      <table mat-table [dataSource]="products">
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
          <td mat-cell *matCellDef="let row">{{row.price}}</td>
        </ng-container>
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>
    </div>
  `
})
export class Read implements OnInit {
  products!: Product[]
  displayedColumns = ['id', 'name', 'price']

  constructor (private productService: ProductService) {}
  ngOnInit (): void {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })

  }
}
