import { Category } from './category';

export class Product {
    static currentMaxId: number = 1;
    id: string;
    name: string;
    price: number;
    category: Category;

    constructor(name: string, price: number, category: Category, id?: string) {
        this.id = id == undefined ? "" + Product.currentMaxId++ : id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method for cloning product object
    clone(): Product {
        return new Product(this.name, this.price, this.category, this.id);
    }
}