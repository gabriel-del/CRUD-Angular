import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <mat-toolbar>
        Desenvolvido com <i class="material-icons">favorite</i>
         <!-- por <strong>Cod<span>3</span>r</strong> -->
    </mat-toolbar>
    <style>
      mat-toolbar {
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: flex-end;
        font-size: 1.1rem;
        font-weight: 300;
      }
      i, span { color: rgb(227,94,107);}
      i, strong { margin: 5px;}
      i { vertical-align: middle;} 
    </style>
  `
})
export class Footer {}
