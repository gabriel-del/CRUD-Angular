import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from "./views/home"
import { ProductCrud } from "./views/product-crud"
import { Create } from './components/product/create';

const routes: Routes = [
  { path: "", component: Home},
  { path: "products", component: ProductCrud},
  { path: "products/create", component: Create}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
