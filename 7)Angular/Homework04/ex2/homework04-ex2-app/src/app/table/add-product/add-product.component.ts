import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from "../product";
import { Category } from '../category';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  Category = Category;
  @Output() messageToEmit = new EventEmitter<Product>();

  // Send product to parent component(table component)
  sendProduct(name, price, category) {
    this.messageToEmit.emit(new Product(name, price, category));
  }
}
