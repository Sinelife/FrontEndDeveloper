import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Category } from '../shared/category';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    public Category = Category;
    products: Product[];

    constructor(private router: Router, private productService: ProductService) { }

    ngOnInit() {
        this.products = this.productService.getProducts();
    }

    onSelect(product: Product) {
        this.router.navigate(["products", product.id]);
    }

    deleteProduct(productId) {
        this.productService.deleteProduct(productId);
        this.getProductsByCategory();
    }

    addProduct(product) {
        this.productService.addProduct(product);
        this.getProductsByCategory();
    }

    getProductsByCategory() {
        let selectedCategory = Array.from(document.getElementsByTagName("option")).find(elem => elem.selected).innerHTML;
        console.log(selectedCategory);
        this.products = this.productService.getProductsByCategory(selectedCategory);
    }

}
