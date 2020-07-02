import { Injectable } from '@angular/core';
import { Product } from './product';
import { Category } from './category';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private products: Product[] = [
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

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(productId): Product {
        return this.products.find(product => product.id == productId);
    }
    
    deleteProduct(productId) {
        this.products.splice(this.getIndexById(productId), 1);
    }

    private getIndexById(id): number {
        let counter: number = 0;
        for(const product of this.products) {
            if(product.id == id) {
                return counter;
            }
            counter++;
        }
    }

    addProduct(product: Product) {
        this.products.push(product);
    }

    getProductsByCategory(category?: string): Product[] {
        let result: Product[] = [];
        this.products.forEach(product => { 
            if(product.category == category) {
                result.push(product);
            }
        });
        return category == "All" ? this.products : result;
    }
}
