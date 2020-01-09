import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent } from "./components/home/home.component"
import { SampleComponent } from "./components/sample/sample.component";
import { ProductsComponent } from "./components/products/products.component";

const routes: Routes = [
  { path : "", component: HomeComponent },
  {path: "products", component: ProductsComponent },
  { path : "sample", component : SampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
