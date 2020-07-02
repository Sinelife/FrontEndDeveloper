import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Image } from 'src/app/extra/image';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent {
  @Output() messageToEmit = new EventEmitter<Image>();

  sendImage(name, src) {
    this.messageToEmit.emit(new Image(name, src));
  }

}
