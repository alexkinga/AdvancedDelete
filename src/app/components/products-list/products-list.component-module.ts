import { NgModule } from '@angular/core';
import { ProductsListComponent } from './products-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {AsyncPipe, NgForOf} from "@angular/common";

@NgModule({
  imports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    NgForOf
  ],
  declarations: [ProductsListComponent],
  providers: [],
  exports: [ProductsListComponent]
})
export class ProductsListComponentModule {
}
