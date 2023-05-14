const library = [];
let inputDate = prompt('Enter book data separate by ";"');

function Book(isbn,title,author,year) {
  this.isbn = isbn;
  this.title= title;
  this.author=author;
  this.year=+year;
  this.toString = function() {
      return `ISBN,${this.isbn},Title: ${this.title},Author:${this.author},Year of publishing:${this.year}`
  }
}

while(inputDate){
//   let count = 0;
//   for (let i =0; i< inputDate.length; i++){
//   if(inputDate[i]===';'){
//     count++;
//   } 
// if(count>3){
//   console.log('Date is not valid');
//   return ;
// }
// }
// if(count!=3){
//   return;
// }
// const arr = inputDate.split(';');
const[isbn,title,author,year] = inputDate.split(';');
// if(arr.length!=4){
// return;
// };
if( inputDate.split(';').length === 4 &&
  isbn && 
  title&& 
  author&&
  year&&
  findBook(library,isbn)=== -1){
  const book = new Book(isbn,title,author,year);
  library.push(book);
}
  inputDate = prompt('Enter book data separate by ";"');
  }



function printLibrary(library){
  for (let i = 0; i < library.length; i++) {
    console.log(library[i].toString());
  }
}


function findBook(library,isbn){
for (let i = 0; i< library.length; i++){
  if(library[i].isbn === isbn){
    return i;
  }
}
  return -1;
}


printLibrary(library);
//1;2;3;4
// const library = [];

// function Book(isbn, title, author, year) {
//   this.isbn = isbn;
//   this.title = title;
//   this.author = author;
//   this.year = +year;
//   this.toString = function() {
//     return `ISBN: ${this.isbn}, Title: ${this.title}, Author: ${this.author}, Year of publishing: ${this.year}`;
//   };
// }

// // Функция добавления книги в библиотеку
// function addBook(library, book) {
//   // Проверка на уникальность ISBN
//   const isUnique = library.every(item => item.isbn !== book.isbn);
//   if (isUnique) {
//     library.push(book);
//     console.log(`The book with ISBN ${book.isbn} has been added to the library.`);
//   } else {
//     console.log(`The book with ISBN ${book.isbn} already exists in the library.`);
//   }
// }

// // Функция поиска книги по ISBN
// function findBook(library, isbn) {
//   const book = library.find(item => item.isbn === isbn);
//   if (book) {
//     console.log(`Book found:\n${book.toString()}`);
//   } else {
//     console.log(`Book with ISBN ${isbn} was not found in the library.`);
//   }
// }

// // Функция распечатки информации о библиотеке
// function printLibrary(library) {
//   console.log(`Library books:`);
//   library.forEach(book => console.log(book.toString()));
// }

// let inputDate = prompt('Enter book data separated by ";" (ISBN;Title;Author;Year):');

// while(inputDate) {
//   const [isbn, title, author, year] = inputDate.split(';');
//   const book = new Book(isbn, title, author, year);
  
//   // проверяем, что год публикации не позже 2022
//   if (book.year <= 2023) {
//     console.log(`The book with ISBN ${book.isbn} cannot be added to the library, because it was published after 2022.`);
//   } else {
//     addBook(library, book);
//   }

//   inputDate = prompt('Enter book data separate by:";"');
// }

// printLibrary(library);

// const searchISBN = prompt('Enter ISBN to search for a book:');
// findBook(library, searchISBN);
