import { Component, OnInit } from '@angular/core';
import { Image } from '../extra/image';
import { Router } from '@angular/router';
import { ImageService } from '../extra/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[];

  constructor(private router: Router, private imageService: ImageService) { }

  ngOnInit() {
      this.images = this.imageService.getImages();
  }

  onSelect(image: Image) {
      this.router.navigate(["gallery", image.id]);
  }

  deleteImage(imageId) {
      this.imageService.deleteImage(imageId);
  }

  addImage(image) {
      this.imageService.addImage(image);
  }
}
