import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <mat-card class="mat-elevation-z3">
      <mat-card-title>Bem vindo!</mat-card-title>
      <mat-card-subtitle>Sistema para exemplificar a construção de um cadastro em Angular</mat-card-subtitle>
    </mat-card>
    <style>
      mat-card-title {
        font-size: 3rem;
        font-weight: 300;
        line-height: 1.2;
      } mat-card-subtitle {
        font-size: 1.1rem;
      }
    </style>
  `,
  styles: [
  ]
})
export class HomeComponent {

}
