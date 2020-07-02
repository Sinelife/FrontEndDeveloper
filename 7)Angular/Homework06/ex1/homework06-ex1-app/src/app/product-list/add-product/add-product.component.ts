import { Component, Output, EventEmitter } from '@angular/core';
import { Category } from 'src/app/shared/category';
import { Product } from 'src/app/shared/product';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  Category = Category;
  @Output() messageToEmit = new EventEmitter<Product>();
  model: Product = new Product("", null, null);

  // Send product to parent component(table component)
  sendProduct(model) {
    this.messageToEmit.emit(new Product(model.name, model.price, model.category));
  }
}
