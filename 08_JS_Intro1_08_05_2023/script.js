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
        sum1 += +(str[i]);
      } else {
        sum2 += +(str[i]);
      }

    }
    if (sum1 == sum2) {
      console.log("Lucky");
    } else {
      console.log("Unlucky");
    }
  }
  
  console.log( banan());
  function banan(){
    let a = 'a';
    let b = 'b';
    return (b+a+(a*b)+a).toLowerCase();
  }

  //(''+x).split('')
  //charAt()
  //1234%10=4
  //1234%10 = 4
  //(1234-4)/10
  //123

// console.log(sumDigitss(1234));
//   function sumDigitss(x){
//     let sum =0;
//     while(x){
//       sum+=x%10;
//       x=(x-x%10)/10;
//     }
//     return sum;
//   }

function sumdigits1(x){
  let sum = 0;
  for (let i = 0; i < (x+"").length; i++) {
    sum += +(x+"")[i]; 
  }
  return sum;
}

function sumDigits2(x){
  let arr = (""+x).split('3');
  let sum = 0;// 'be or not to be' ('o') => ['Be', 'r n','t t','be'] 
  for (let i = 0; i < arr.length; i++) {
   sum += arr[i];
  }
  return sum;
}


// console.log( luckyNumber1(444219));
// function luckyNumber1(x){
//   if (typeof +x!== 'number' || x<100) return false;
//   const numberLength = (''+x).length;
//   //const mid = numberLength%2 === 0?numberLength/2 :(numberLength-1)/2;
//   const mid = Math.floor(numberLength/2);
//   const substr1 = (''+x).substring(0,mid);// (star, finish)- start входит в новую подстроку finish не входит
//  // const substr2 = numberLength %2===0?(''+x).substring(mid):(''+x).substring(mid+1);
//  const substr2 = (''+x).substring(numberLength - mid);
//  return sumDigits(+substr1) === sumDigits(+substr2);

// }
console.log(luckyNumber2(111111));
function luckyNumber2(x){
  if(typeof +x !=='number' || x<100) return false;
  const str = (''+x);
  const mid =Math.floor((''+x).length/2);
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < mid; i++) {
    leftSum+= +str[i];
    rightSum+= +str[str.length -i -1];
  }
  return leftSum === rightSum;
}
let counterI = 0;
let counterJ = 0;
let arr1 = [1,2,3,6,5,4];

function bubbleSort(arr){
  for (let i = 0; i < arr.length-1; i++) {
    counterI++;
    for (let j = 0; j < arr.length-1 -i; j++) {
      counterJ++;
      if(arr[j]- arr[j+1]>0){
        let temp = arr[j];
        arr[j]= arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}

bubbleSort(arr1);
console.log(arr1, counterI, counterJ);