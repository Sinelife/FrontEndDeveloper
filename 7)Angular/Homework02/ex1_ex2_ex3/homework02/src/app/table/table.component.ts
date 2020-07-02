import { Component, Input } from '@angular/core';
import { Product } from "./product";

const PRODUCTS: Product[] = [
  { id: 1, name : "tomatoes", price : 120 },
  { id: 2, name : "potatoes", price : 150 },
  { id: 3, name : "onion", price : 170 },
  { id: 4, name : "melons", price : 110 },
  { id: 5, name : "watermelons", price : 135 },
  { id: 6, name : "apples", price : 170 },
  { id: 7, name : "oranges", price : 210 },
  { id: 8, name : "grapes", price : 220 },
  { id: 9, name : "chocolate", price : 267 },
  { id: 10, name : "candies", price : 279 }
];

@Component({
  selector: 'my-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  products: Product[] = PRODUCTS;
  @Input() rows: number;

  deleteRow(product: Product) {
    let table = document.getElementsByTagName("tbody")[0];
    let tableRow = this.getRowElemByProductName(product.name);
    table.removeChild(tableRow);
  }

  private getRowElemByProductName(name: string) {
    let elems = document.getElementsByTagName("td");
    for (let i = 0; i < elems.length; i++) {
      if(elems[i].innerHTML.trim() == name) {
        return elems[i].parentElement;
      }
    }
    return null;
  }

}
