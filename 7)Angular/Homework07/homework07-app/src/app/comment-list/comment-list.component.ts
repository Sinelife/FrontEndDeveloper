import { Component, OnInit } from '@angular/core';
import { Comment } from '../extra/comment';
import { CommentService } from '../extra/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: Comment[] = [];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentService.getComments().subscribe(result => this.comments = result);
  }

  addComment(comment) {
    this.commentService.addComment(comment).subscribe(elem => this.comments.push(elem));
    this.ngOnInit();
  }

  deleteComment(commentId) {
    this.commentService.deleteComment(commentId).subscribe(() => this.ngOnInit());
  }

}
