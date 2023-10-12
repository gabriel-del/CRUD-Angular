import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule } from '@angular/material/button'
import {MatSnackBarModule } from '@angular/material/snack-bar'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule }from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import {MatInputModule } from '@angular/material/input'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './components/template/header';
import { Footer } from './components/template/footer';
import { Nav } from './components/template/nav'
import { Create } from './components/product/create';
import { Home } from './views/home'
import { ProductCrud } from './views/product-crud';
import { Read } from './components/product/read';
import { Read2Component } from './components/product/read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Footer,
    Nav,
    Home,
    ProductCrud,
    Create,
    Read,
    Read2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
