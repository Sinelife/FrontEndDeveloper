import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';


const routes: Routes = [
    { path: "", redirectTo: "comments", pathMatch: "full" },
    { path: "comments", component: CommentListComponent}                                 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
