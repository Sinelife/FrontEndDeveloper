export class Image {
    static currentMaxId: number = 1;
    id: string;
    name: string;
    src: string;

    constructor(name: string, src: string, id?: string) {
        this.id = id == undefined ? "" + Image.currentMaxId++ : id;
        this.name = name;
        this.src = src;
    }
}