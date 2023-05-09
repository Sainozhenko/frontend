console.log('Hello world!');
let x;
console.log(x);
x=7;
x = 'bye' ;
console.log(x);

let  pi = 3.1415926;
// pi = 3.14; нельзя переопределить константу єто не переменная 
console.log(pi); 

let y= x;
console.log(y);

console.log('pi=' +pi);

const exp = pi;
console.log(`exp =${exp} or ${pi}`);

x=null;
console.log(x);

x=true;
console.log(x);

let res = 7%2; // остаток от деления
console.log(`res = ${res}`);

res = 'true' +5;
console.log(`res = ${res}`);

res = true +5; //false 0 true 1;
console.log(`res = ${res}`);

x ='2' === 2;
console.log(x);

x='2' == 2 ;
console.log(x);

// res = +'5'; // Number ('5')- 5

res = 5 +'';

switch (res) {
    case 5:
        console.log(`number: ${res}`);
        break;
    case '5':
    console.log(`string: ${res}`);
    break;
    default:
        console.log('Not a 5');
        break;
}

let age = 17; 
let vol = age >=18? 'Yes' : 'No';
console.log(`vol = ${vol}`);


res = -age;
console.log(res);

++age; // прибавляем единицу сначала потом используем значение age
age++; // используя значение age потом прибавляем еденицу 

x=10;
res=x++ + ++x; // res 10 + 12 =22 

console.log(+pi.toFixed(2));

console.log(typeof age);
age = '5'
age = undefined;
console.log(typeof age);
age = null;
console.log(typeof (age));

x = 10;
y = 5;
res = add(x,y);
console.log(`res = ${res}`);

function add(a,b){
     return a+b;
}

x= !!x; // ! не явное приведение переменной к булеан значению
console.log(x); //любое число будет true кроме 0(false)

let example = 'hello';
console.log(!!example);

//false = null, undefined, NaN, 0, false, '' ;

let userName = null;
let nickName = userName || 'Anonymous';
console.log(nickName);

greeting();
greeting("Rabindranat");

function greeting(nickName1 = 'Anonymous'){
    nickName1 = nickName1 || 'Anonymous';
    console.log(`Hello ${nickName1}`);
}

//int[] arr = new int[5];
//int[] arr = {2,3,4,5};

const arr = [1,2,3, 'four', 'five','six',true];
console.log(typeof arr);

console.log(arr[3]);
console.log(typeof arr[3]);
arr[3] =4;
console.log(arr[3]);
console.log(arr.length);
arr[10] = 100500;
console.log(arr[10]);
console.log(arr);
console.log(arr[9]);
arr.length=3;
console.log(arr);
//printArray(arr);


// console.log( 5*'a');

// function printArray(arr){
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
//     }

    res = sumDigits(6565);
 console.log(`res = ${res}`);

banana();

function sumDigits(a){
    let sum = 0;
    const str = a.toString();
    for (let i = 0; i < str.length; i++) {
      const element = parseInt(str[i]);
        sum += element;
    }
    return sum;
  }
  
function banana(){
    let a = 'a';
    let b = 'b';
    console.log(String.fromCharCode(b.charCodeAt(0),a.charCodeAt(0),110,a.charCodeAt(0),110,a.charCodeAt(0)));
}

luckyNumber(813444);


 function luckyNumber(x) {
    const str = x.toString();
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < str.length; i++) {
      if (i < str.length/2) {
        sum1 += parseInt(str[i]);
      } else {
        sum2 += parseInt(str[i]);
      }

    }
    if (sum1 == sum2) {
      console.log("Lucky");
    } else {
      console.log("Unlucky");
    }
  }