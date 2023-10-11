import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-create',
  template: `
  <p>Create Works!</p>
  <button (click)="fazerAlgo()">Fazer Algo!</button>
  `
})
export class Create implements OnInit{
  constructor() {  }
  atributoLegal = 'qualquer'
  fazerAlgo(): void {
    console.log('fazendo algo...')
  }


  ngOnInit(): void {
    // this.productService.showOnConsole('Teste...123')
    // console.log(this.productService)
    
  }
}
