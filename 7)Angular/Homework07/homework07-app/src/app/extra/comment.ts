export class Comment {
    static currentMaxId: number = 1;
    id: string;
    userName: string;
    text: string;
    creationDate: Date;

    constructor(userName: string, text: string, creationDate: Date, id?: string) {
        this.id = id == undefined ? "" + Comment.currentMaxId++ : id;
        this.userName = userName;
        this.text = text;
        this.creationDate = creationDate;
    }
}