import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-create',
  template: `
  <p [id]="propLegal">Create Works!</p>
  <button (click)="fazerAlgo()">Fazer Algo!</button>
  `
})
export class Create implements OnInit{
  constructor() {  }
  propLegal = 'qualquer'
  fazerAlgo(): void {
    console.log('fazendo algo...')
  }


  ngOnInit(): void {
    // this.productService.showOnConsole('Teste...123')
    // console.log(this.productService)
    
  }
}
