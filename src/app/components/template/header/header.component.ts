import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="mat-elevation-z4">
      <span class="logo">
        <a routerLink="/"><img src="assets/img/logo.png" alt="logo"></a>
      </span>
      <span class="title">
        <a><i class="material-icons">home</i>Início</a>
      </span>
    </mat-toolbar>

    <style>
      mat-toolbar {
        display:flex;
        align-items: center;
      } a {
        display:flex;
        align-items: center;
        text-decoration: none;
      } .logo img {
        max-height: 32px;
      } .title {
        padding-left: 25px;
      } .title i {
        padding-right: 5px;
      }
    </style>`
})
export class HeaderComponent {}
