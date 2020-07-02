import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
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

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(4)]),
      price: new FormControl("", Validators.required),
      category: new FormControl("", Validators.required)
    });
  }

  // Send product to parent component(table component)
  sendProduct(name, price, category) {
    this.messageToEmit.emit(new Product(name, price, category));
  }
}
