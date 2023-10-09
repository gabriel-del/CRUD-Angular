import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar>
      <span>
        Desenvolvido com <i class="material-icons red v-middle">favorite</i> por <strong>Cod<span class="red">3</span>r</strong>
      </span>
    </mat-toolbar>
    <style>
      mat-toolbar {
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: flex-end;
      } span {
        font-size: 1.1rem;
        font-weight: 300;
      }
    </style>
  `
})
export class Footer {}
