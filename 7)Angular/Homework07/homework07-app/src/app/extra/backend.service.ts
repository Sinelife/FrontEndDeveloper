import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api'
import { Comment } from './comment';

@Injectable({
    providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

    constructor() { }

    createDb() {
        let comments: Comment[] = [
            new Comment("HolMes", "Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! Top! ", new Date("2019-07-23")),
            new Comment("Sinelife", "Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!", new Date("2019-01-16")),
            new Comment("Voidstorm", "I love it", new Date("2019-05-22")),
            new Comment("Beckham", "fwefewf  fwf  f w f e f q ef  feq e f we fwe f wef ee", new Date("2019-11-05"))
        ];

        return { comments }
    }
}
