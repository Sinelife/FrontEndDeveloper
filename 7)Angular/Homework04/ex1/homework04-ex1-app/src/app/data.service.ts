import { Injectable } from "@angular/core";
import { Product } from './table/product';
import { Category } from './table/category';

@Injectable()
export class DataService {
    getData() {
        return [
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
    }
}