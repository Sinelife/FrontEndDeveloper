import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product: Product;

    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: ProductService) { }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            let id: string = params["id"];
            this.product = this.service.getProduct(id);
        });
    }

    goToProductList() {
        this.router.navigate(["/.."]);
    }
}
