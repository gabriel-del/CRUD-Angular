import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from '../components/template/header.service';

@Component({
  selector: 'app-product-crud',
  template: `
    <button mat-raised-button (click)="navigateToProductCreate()" color="primary">Novo produto</button>
    <app-read></app-read>
    <style>
      button {
        margin-bottom: 30px;
      }
    </style>

  `})
export class ProductCrud implements OnInit{
  constructor (private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create'])
    }
}
