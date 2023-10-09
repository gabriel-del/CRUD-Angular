import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  template: `
    <button mat-raised-button (click)="navigateToProductCreate()">
      Novo produto
    </button>
  `})
export class ProductCrud implements OnInit{
  constructor (private router: Router) {}
  ngOnInit(): void {
  }
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
    }
}
