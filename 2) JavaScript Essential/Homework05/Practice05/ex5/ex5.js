// EX 5
document.write("EX 5<br>");

// Creating object book
let book = new Object();
book.pageNum = 300;
book.story = new Object();
book.story.author = "John Black";
book.story.content = new Object();
book.story.content.chapter1 = "Chapter1!!!!!!!!!!!!";
book.story.content.chapter2 = "Chapter2!!!!!!!!!";

// Function for outputing book
let outputBook = function(a) {
    document.write("BOOK<br>");
    document.write("pageNum: " + a.pageNum + "<br>");
    document.write("author: " + a.story.author + "<br>");
    document.write("chapter1: " + book.story.content.chapter1 + "<br>");
    document.write("chapter2: " + book.story.content.chapter2 + "<br>");
}

// Calling function to output book
outputBook(book);
