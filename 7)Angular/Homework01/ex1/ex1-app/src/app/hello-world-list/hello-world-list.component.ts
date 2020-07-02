import { Component } from "@angular/core";
import { Phrase } from "./phrase";

const PHRASES: Phrase[] = [
    { value: "Hello World", language: "English" },
    { value: "Привет Мир", language: "Russian" },
    { value: "Привіт Світ", language: "Ukrainian" },
    { value: "Hola Mundo", language: "Spanish" },
    { value: "Bonjour le monde", language: "French" },
    { value: "Hallo Welt", language: "German" },
    { value: "Ciao mondo", language: "Italian" },
    { value: "Witaj świecie", language: "Polish" },
    { value: "Hej världen", language: "Swdish" },
    { value: "Pozdravljen, svet", language: "Slovenian" },
    { value: "Прывітанне Сусвет", language: "Belarusian" },
    { value: "안녕 세상", language: "Korean" },
    { value: "你好，世界", language: "Chinese" },
    { value: "こんにちは世界", language: "Japanese" },
    { value: "Selam Dünya", language: "Turkish" },
    { value: "สวัสดีชาวโลก", language: "Thai" }
];

@Component({
    selector: "hello-world-list",
    templateUrl: "hello-world-list.component.html",
    styleUrls: ["hello-world-list.component.css"]
})
export class HelloWorldListComponent {
    PhraseList: Phrase[] = PHRASES;
    selectedPhraseLanguage: string;

    // Обработчик события, к которому привязаны элементы li из файла hello-world-list.component.html
    onSelect(selected: Phrase) {
        this.selectedPhraseLanguage = selected.language;
    }
}