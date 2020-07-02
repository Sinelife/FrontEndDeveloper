import { Component, EventEmitter, Output } from '@angular/core';
import { Comment } from 'src/app/extra/comment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  @Output() messageToEmit = new EventEmitter<Comment>();

  sendComment(userName, text) {
    this.messageToEmit.emit(new Comment(userName, text, new Date()));
  }

}
