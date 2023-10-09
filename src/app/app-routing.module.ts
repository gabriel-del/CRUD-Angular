import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home"
import { ProductCrudComponent } from "./views/product-crud"

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "products", component: ProductCrudComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
