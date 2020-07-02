import { Component, OnInit } from '@angular/core';
import { Image } from '../extra/image';
import { Router, ActivatedRoute } from '@angular/router';
import { ImageService } from '../extra/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images: Image[] = [];

  constructor(private router: Router, private imageService: ImageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.imageService.getImages().subscribe(result => this.images = result);
  }

  onSelect(selected: Image) {
    this.router.navigate([selected.id], { relativeTo: this.activatedRoute });
  }

  addImage(image) {
    this.imageService.addImage(image).subscribe(image => this.images.push(image));
  }

  deleteImage(imageId) {
    this.imageService.deleteImage(imageId).subscribe(() => this.ngOnInit());
  }
}
