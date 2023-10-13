import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Home } from "./views/home"
import { ProductCrud } from "./views/product"
import { Create } from './components/product/create';
import { Update } from './components/product/update';
import { Delete } from './components/product/delete';

const routes: Routes = [
  { path: "", component: Home},
  { path: "products", component: ProductCrud},
  { path: "products/create", component: Create},
  { path: "products/update/:id", component: Update},
  { path: "products/delete/:id", component: Delete}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
