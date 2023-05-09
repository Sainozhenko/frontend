let a = 555;
let b = '' + a;
a = '333';
console.log(a.length);
console.log(b.length);

function sumDigits(a){
    let sum = 0;
    const str = '' + a;
    for (let i = 0; i < ('' + a).length; i++) {
        const element = +str[i];
        sum += element;
    }
    return sum;
}

console.log(sumDigits(12345));

// 12345 % 10 = 5;        12345 => [1,2,3,4,5] 
// (12345 - 5) / 10;

// 1234 => ...

// Primitive Types:
//Number: 10, -5, 3.14;
//String: 'hello', 'world', '123';
//Boolean: true, false;
//Undefined: let a; a is undefined;
//Null: let b = null;

//+ - * / % **

console.log( 2 ** 3 );
console.log(Math.pow(2, 3)); // аналог записи выше

console.log( typeof 1 ); // 'number'
console.log( typeof 'hello' ); // 'string'
console.log( typeof true ); // 'boolean'
console.log( typeof undefined ); // 'undefined'
console.log( typeof null ); // 'object'

console.log( 1 == '1' ); // true (non-strict equality)
console.log( 1 === '1' ); // false (strict equality)
console.log( 1 != '2' ); // true (non-strict equality)
console.log( 1 !== '2' ); // true (strict equality)
console.log( 5 > 3 ); // true
console.log( 3 <= 3 ); // true

console.log(1 + '2'); // '12' (number is coerced to a string)
console.log('3' * '4'); // 12 (strings are coerced to a numbers)
console.log('3fg' * '4'); // NaN (one or two opetaors are  coerced to a numbers)
console.log(2 == '2'); // true (number  is coerced to a string for comparison);

let arr = [1,2,3];
let names = ['Alice','Bob','Charlie'];
let mix = [11,'two',false,null, undefined,NaN, 
{
  userName:'Semen',
  age:28,
  toString: `My name is ${this.userName}, i'm ${this.age} years old`
}];
console.log(mix[5].toString);