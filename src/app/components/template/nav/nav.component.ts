import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <mat-sidenav-container>
        <mat-sidenav mode="side" opened fixedInViewport="true" fixedTopGap="64">
            <mat-nav-list>
                <a mat-list-item routerLink="/"><span><i class="material-icons">home</i>Início</span></a>
                <a mat-list-item  routerLink="/products"><span><i class="material-icons">storefront</i>Produtos</span></a>
            </mat-nav-list>
        </mat-sidenav>
        <mat-sidenav-content>
          <app-home></app-home>
        </mat-sidenav-content>
    </mat-sidenav-container>
    <style>
      mat-sidenav {
          background-color: #3F51B5;
          width: 200px;
        } mat-sidenav  span{
        /* background-color: #F00; */
        color: #FFF
      } mat-sidenav i {
        padding-right: 10px;
      } mat-sidenav-content {
        padding: 16px;
        background-color: #FFF;
      }
    </style>
  `,
  styles: [
  ]
})
export class NavComponent {

}
