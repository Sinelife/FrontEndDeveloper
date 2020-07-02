import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { AddProductComponent } from './table/add-product/add-product.component';
import { DeleteProductComponent } from './table/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddProductComponent,
    DeleteProductComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
