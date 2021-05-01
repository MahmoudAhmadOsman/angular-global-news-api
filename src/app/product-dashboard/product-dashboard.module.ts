import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';



@NgModule({
  declarations: [ProductDashboardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductDashboardComponent
  ]
})
export class ProductDashboardModule { }
