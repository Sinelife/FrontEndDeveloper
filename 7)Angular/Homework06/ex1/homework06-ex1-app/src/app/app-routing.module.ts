import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    { path: "", redirectTo: "products", pathMatch: "full" },
    { path: "products", component: ProductListComponent },
    { path: "products/:id", component: ProductDetailsComponent },
    { path: "home", component: HomeComponent },
    { path: "admin", component: AdminComponent },                                      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
