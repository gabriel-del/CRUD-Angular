import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar class="mat-elevation-z4">
      <span class="logo">
        <a routerLink="/"><img src="assets/img/logo.png" alt="logo"></a>
      </span>
      <span class="title">
        <a routerLink="{{ routeUrl }}"><i class="material-icons">{{ icon }}</i>{{ title }}</a>
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
        color: #333;
      } .logo img {
        max-height: 32px;
      } .title {
        padding-left: 25px;
      } .title i {
        padding-right: 5px;
      }
    </style>`
})
export class Header {
  constructor(private headerService: HeaderService) {}
  get title(): string {return this.headerService.headerData.title }
  get icon (): string {return this.headerService.headerData.icon }
  get routeUrl(): string {return this.headerService.headerData.routeUrl }
}
