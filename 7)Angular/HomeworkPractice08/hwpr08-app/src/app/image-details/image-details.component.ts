import { Component, OnInit } from '@angular/core';
import { Image } from '../extra/image';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ImageService } from '../extra/image.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailsComponent implements OnInit {
  image: Image;

  constructor(private router: Router,
      private activatedRoute: ActivatedRoute,
      private service: ImageService) { }

  ngOnInit() {
      this.activatedRoute.params.forEach((params: Params) => {
          let id: string = params["id"];
          this.image = this.service.getImage(id);
      });
  }

  goToGallery() {
      this.router.navigate(["gallery"]);
  }
}
