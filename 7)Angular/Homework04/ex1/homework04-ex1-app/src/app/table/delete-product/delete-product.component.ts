import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Product } from "../product";

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  @Input() productId;
  @Output() messageToEmit = new EventEmitter<Product>();

  // Send id of product which must be deleted to parent component(table component)
  sendId(id) {
    console.log(id);
    this.messageToEmit.emit(id);
  }
}
