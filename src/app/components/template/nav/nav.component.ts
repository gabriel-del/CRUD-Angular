import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <mat-sidenav-container>
        <mat-sidenav mode="side" opened 
            fixedInViewport="true" fixedTopGap="64">
            <mat-nav-list>
                <a mat-list-item routerLink="/"><i class="material-icons">home</i>Início</a>
                <a mat-list-item  routerLink="/products"><i class="material-icons">storefront</i>Produtos</a>
            </mat-nav-list>
        </mat-sidenav>
    </mat-sidenav-container>
    <style>
      mat-sidenav {
          background-color: #3F51B5;
          width: 200px;
      } mat-sidenav a {
        color: #FFF;
      } mat-sidenav i {
        padding-right: 10px;
      }
    </style>
  `,
  styles: [
  ]
})
export class NavComponent {

}
