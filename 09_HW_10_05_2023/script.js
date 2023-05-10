const library = [];
let inputDate = prompt('Enter book data separate by:";"');
//console.log(inputDate);


while(inputDate){

}

function printLibrary(library){
//TODO
}

function findBook(library,isbn){
    //TODO return index of book, if book not exists -1
    }
printLibrary();
//1;2;3;4
function book(isbn,title,author,year) {
    if(+year<=2023){
    this.isbn = isbn;
    this.title= title;
    this.author=author;
    this.year=+year;
    this.toString = function() {
        return `ISBN,${this.isbn},Title: ${this.title},Author:${this.author},Year of publishing:${this.year}`
    }
    }
}