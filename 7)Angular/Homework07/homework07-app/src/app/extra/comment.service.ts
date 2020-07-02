import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable} from 'rxjs';
import { Comment } from './comment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

    constructor(private http: HttpClient) { }

    public getComments(): Observable<Comment[]> {
        return this.http.get<Comment[]> (environment.apiUrl + "comments")
        .pipe(map(comments => this.sortByDate(comments)));
    }

    addComment(comment: Comment): Observable<Comment> {
        return this.http.post<Comment>(environment.apiUrl + "comments", comment).pipe();
    }

    deleteComment(commentId): Observable<string>  {
        return this.http.delete<string>(environment.apiUrl + "comments/" + commentId);
    }


    private sortByDate(array: Comment[]): Comment[] {
        array.sort((a: Comment, b: Comment) => { 
            return new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime();
        });
        return array; 
    }
}
