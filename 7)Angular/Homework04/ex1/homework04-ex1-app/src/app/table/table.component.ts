import { Component, Input, OnInit } from '@angular/core';
import { Product } from "./product";
import { Category } from './category';
import { DataService } from '../data.service';

@Component({
  selector: 'my-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public Category = Category;
  productBuffer: Product[]; // We need buffer for products to not lose products after filtering data
  products: Product[];      //productsBuffer is array clone of products which contain all products while in products array we filter elements by category
  @Input() rows: number;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.productBuffer = this.dataService.getData();
    this.products = this.clone(this.productBuffer);
  }

  // Method for deleting product from our array(and from productBuffer too)
  deleteProduct(id) {
    this.deleteById(id, this.products);
    this.deleteById(id, this.productBuffer);
  }

  // Private util method for deleting element by id from array
  private deleteById(id, array) {
    let elemForDelete = array.find(elem => elem.id == id);
    let index = array.indexOf(elemForDelete);
    array.splice(index, 1);
  }

  // Method for adding product to our array(and to productBuffer too)
  addProduct(elem) {
    this.products.push(elem);
    this.productBuffer.push(elem);
  }

  // Method for updating productlist after filtering elements by category
  updateList() {
    this.products = this.clone(this.productBuffer);
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
