
console.log('===Destrecture===');
const infoFullName =  ['John', 'Doe'];
const[firstName,lastName] = infoFullName;//диструктуризация 
console.log(firstName,lastName);

const numbers = [1,2,3,4];
const[first, , ,fourth] = numbers;
console.log(first, fourth);

const book = [1,'Theodore Dreiser', 'Finansist', 1912];
const[isbn,author,title,year] = book;
console.log(isbn,author,title,year);

const[a,b, ...rest]= numbers;
console.log(a ,b, rest); //a=1; b =2 , rest=[3,4]

console.log('===Spred===');
let arr1 = [1,2,3];
let arr2 = [4,5,6];
const newArr = [...arr1, ...arr2];
console.log(arr1,arr2);
console.log(newArr);

arr1 = ['a', 'b', 'c'];
arr2 = [...arr1, 'd','e', 'f'];
console.log(arr2);

console.log('====== Arrays methods ======');

arr1=[1,2,3];
let res = arr1.push(5);//добавляет єлемент в конец массива и возвращает новую длину массива
console.log(arr1); //1,2,3,4,5
console.log(res);//4

res = arr1.pop();//удаляет с конца массива последний элемент
console.log(res);//5
console.log(arr1);//1,2,3

res = arr1.shift();//удаляет элемент в начале массиваб возвращает удаленный элемент
console.log(res);//2,3
console.log(arr1);//1

res = arr1.unshift(0);//добавляет  элемент в начале массиваб возвращает удаленный элемент
console.log(res);//0,2,3
console.log(arr1);//3

res = arr1.splice(1,2,8,9,10);//Удаляет  элементы из массива возвращает удаленный элемент
console.log(res);//2,3
console.log(arr1);//0,8,9,10

res = arr1.slice(1,3);//не изменяет исходный массив возвращает удаленный контент 
console.log(res);//8,9 
console.log(arr1);//0,8,9,10

const arr99 = arr1.concat(arr2);
console.log(arr1);//0,8,9,10 
console.log(arr2);//4,5,6

console.log(arr99);//0,8,9,10