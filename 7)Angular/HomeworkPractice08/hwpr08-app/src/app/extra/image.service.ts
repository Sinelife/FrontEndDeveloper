import { Injectable } from '@angular/core';
import { Image } from './image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private images: Image[] = [
    new Image("Megumin", "https://cs7.pikabu.ru/post_img/big/2018/02/01/5/15174703001395782.jpg"),
    new Image("Kanna Kamui", "https://cs9.pikabu.ru/post_img/big/2017/06/24/4/1498278370140643014.jpg"),
    new Image("Krul Tepes", "https://i.pinimg.com/originals/73/b3/2e/73b32e061919f91e43d3e9a83e7d942b.jpg"),
    new Image("Nezuko Kamado", "https://i.pinimg.com/originals/7a/ea/a9/7aeaa90835bf91dd31eaf9bfac9bb77a.jpg"),
    new Image("Umaru Doma", "https://i.pinimg.com/originals/e3/78/b4/e378b427baece3cb4a351ea496f2fbbd.jpg"),
    new Image("Niko Yazawa", "https://cs8.pikabu.ru/post_img/big/2017/12/24/7/151411545314657653.png"),
  ];

  getImages(): Image[] {
    return this.images;
  }

  getImage(imageId): Image {
    return this.images.find(image => image.id == imageId);
  }

  deleteImage(productId) {
    this.images.splice(this.getIndexById(productId), 1);
  }

  private getIndexById(id): number {
    let counter: number = 0;
    for(const image of this.images) {
      if(image.id == id) {
        return counter;
        }
      counter++;
    }
  }

  addImage(image: Image) {
      this.images.push(image);
  }
}
