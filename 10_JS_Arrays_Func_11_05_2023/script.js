console.log('==== Regular Function ====');
console.log( multiply(3,5));


function multiply(a,b){
return a*b;
}

console.log( multiply(2,5));

console.log('==== Arrow Function ====');
// console.log(multiplyArrow(4,5)); ReferenceError: нельзя вызывать до ее инициализации 

const multiplyArrow = (a,b) => a*b;

console.log(multiplyArrow(5,5));

const obj = {
    userName: 'John', 
    sayHello: function(){
        console.log(this);//this = object
        console.log(`Hello ${this.userName}`); // Hello John
    }
}

obj.sayHello();

const objArrow = {
    userName: 'John',
    sayHello:()=>{
        console.log(this);// this - global field window 
        console.log(`Hello ${this.userName}`);// Hello undefined 
    }
}

objArrow.sayHello();

const person ={
    firstName: 'John',
    lastName: 'Smith',
    age: 34,
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

let arr = Object.keys(person);// Array of keys
console.log(arr);

arr = Object.values(person);//Array of values
console.log(arr);

arr = Object.entries(person); // Array with arrays[key,value]
console.log(arr[2][0]); // [[0,1],[0,1],[0,1] ]



arr = ['one','two','threE', 'eight', 'tHree', 'three','six'];
console.log('===== indexOF =====');
let res = arr.indexOf('three');
//console.log(arr);//исходный массив не меняется 
console.log(res);//возвращает индекс искаемого єлемента (возвращает -1 если такого элемента нет)

res = arr.includes('three123');
//console.log(arr);//исходный массив не меняется 
console.log(res);//возвращает true искаемого єлемента (возвращает false если такого элемента нет)

res = arr.findIndex((x,i)=>i>2 && x.toLowerCase()==='three');
//console.log(arr);//исходный массив не меняется 
console.log(res);//возвращает индекс искаемого єлемента (возвращает -1 если такого элемента нет)

res = arr.findIndex(predicateLength3);
console.log(res);//возвращает индекс искаемого єлемента (возвращает -1 если такого элемента нет)


function predicateLength3(element,index){
    return index>=2 && element.length === 3;
}

const persons = [
    {
        userName: 'Peter',
        age:23
    },
    {
        userName: 'John',
        age:28
    },  {
        userName: 'Tigran',
        age:26
    },
    {
        userName: 'Rabindranat',
        age:23
    }
];

res = persons.findIndex((person, index)=> index>0&& person.age<25);
console.log(res);

res= persons.filter(person=>person.age<25);
console.log(res);

res=persons.map((person,index)=> `Name:${index+1}.${person.userName}, age:${person.age}`);
console.log(res);

res=persons.reduce((accum,item)=>accum+item.age,0);
console.log(res);

res = persons.sort((a, b) => a.age - b.age === 0 ? b.userName.length - a.userName.length : a.age - b.age);
console.log(res);

res = persons.reduce((acc, item) => {
    console.log(acc);
    console.log(item.age);
    return acc += item;
  }, 0);
  console.log(res);