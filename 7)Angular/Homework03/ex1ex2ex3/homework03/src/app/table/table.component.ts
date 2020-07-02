import { Component, Input } from '@angular/core';
import { Product } from "./product";
import { Category } from './category';

let data: Product[] = [
  new Product("tomatoes", 520, Category.Vegetables),
  new Product("potatoes", 450, Category.Vegetables),
  new Product("onion", 770, Category.Vegetables),
  new Product("melons", 610, Category.Fruits),
  new Product("watermelons", 435, Category.Fruits),
  new Product("apples", 370, Category.Fruits),
  new Product("oranges", 510, Category.Fruits),
  new Product("grapes", 470, Category.Berries),
  new Product("chocolate", 567, Category.Sweets),
  new Product("candies", 579, Category.Sweets)
];

@Component({
  selector: 'my-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public Category = Category;
  products: Product[] = this.clone(data);
  @Input() rows: number;

  // Method for deleting product from our array(and from data too)
  deleteProduct(id) {
    this.deleteById(id, this.products);
    this.deleteById(id, data);
  }

  // Private util method for deleting element by id from array
  private deleteById(id, array) {
    let elemForDelete = array.find(elem => elem.id == id);
    let index = array.indexOf(elemForDelete);
    array.splice(index, 1);
  }

  // Method for adding product to our array(and to data too)
  addProduct(elem) {
    this.products.push(elem);
    data.push(elem);
  }

  // Method for updating productlist after filtering elements by category
  updateList() {
    this.products = this.clone(data);
    let selectedOption = this.getSelectedCategory();
    this.products = this.getFilteredByCategoryList(selectedOption.innerHTML);
  }

  // Private method which get chosen category from select DOM element
  private getSelectedCategory() {
    return Array.from(document.getElementsByTagName("option")).find(elem => elem.selected);
  }

  // Private method which get all products filtered by category
  private getFilteredByCategoryList(category: string): Product[] {
    return category == "All" ? this.products : this.products.filter(product => product.category == category);
  }

  // Private method which get clone of array(not reference)
  private clone(data) {
    return data.map(item => item.clone());
  }
}
