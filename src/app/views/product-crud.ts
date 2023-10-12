import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  template: `
    <button mat-raised-button (click)="navigateToProductCreate()" color="primary">Novo produto</button>
    <app-read></app-read>
    <app-read2></app-read2>
    <style>
      button {
        margin-bottom: 30px;
      }
    </style>

  `})
export class ProductCrud implements OnInit{
  constructor (private router: Router) {}
  ngOnInit(): void {
  }
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
    }
}
