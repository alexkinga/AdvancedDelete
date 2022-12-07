import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-list', component: ProductsListComponent }]), ProductsListComponentModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
