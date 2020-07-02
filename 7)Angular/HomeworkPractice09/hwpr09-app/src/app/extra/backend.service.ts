import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Image } from './image';

@Injectable({
    providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

    constructor() { }

    createDb() {
        let images: Image[] = [
            new Image("Megumin", "https://cs7.pikabu.ru/post_img/big/2018/02/01/5/15174703001395782.jpg"),
            new Image("Kanna Kamui", "https://cs8.pikabu.ru/post_img/2017/04/03/11/1491243372136442507.png"),
            new Image("Krul Tepes", "https://i.pinimg.com/originals/73/b3/2e/73b32e061919f91e43d3e9a83e7d942b.jpg"),
            new Image("Nezuko Kamado", "https://i.pinimg.com/originals/7a/ea/a9/7aeaa90835bf91dd31eaf9bfac9bb77a.jpg"),
            new Image("Umaru Doma", "https://i.pinimg.com/originals/e3/78/b4/e378b427baece3cb4a351ea496f2fbbd.jpg"),
            new Image("Niko Yazawa", "https://cs8.pikabu.ru/post_img/big/2017/12/24/7/151411545314657653.png"),
          ];

        return { images }
    }
}
