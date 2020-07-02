import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailsComponent } from './image-details/image-details.component';


const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "gallery", component: GalleryComponent},
    { path: "gallery/:id", component: ImageDetailsComponent },
    { path: "home", component: HomeComponent },
    { path: "contacts", component: ContactsComponent },                                      
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
