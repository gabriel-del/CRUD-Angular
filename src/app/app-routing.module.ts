import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from "./views/home"
import { ProductCrud } from "./views/product-crud"

const routes: Routes = [
  { path: "", component: Home},
  { path: "products", component: ProductCrud}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
