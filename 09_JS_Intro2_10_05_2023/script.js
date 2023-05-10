const arr = [1,2,3, 'four','five'];
console.log(typeof arr);
console.log('====push====');

let res = arr.push(6,7,8); // добавляет в массив элементы
console.log(arr); //отображает весь массив с новыми элементами
console.log(res);//показывает количество элементов массива

console.log('==== pop ====');
res = arr.pop(); // удаляет последний элемент и возвращает удаленный элемент
console.log(arr);
console.log(res);
console.log('==== shift ====');
res=arr.shift();//удаляет вначале элемент массива возвращает удаленный элемент
console.log(arr);
console.log(res);
console.log('==== unshift ====');
res=arr.unshift(0,1);//вставляет элементы в начало массива и возвращает новую длину массива
console.log(arr);
console.log(res);
console.log('==== concat ====');
const arr1 = [1,2,3];
const arr2 = [4,5,6];
res=arr1.concat(arr2);//не изменяет исходные массивы и возвращает новый массив который сложен из двух массивов
console.log(arr1);
console.log(arr2);
console.log(res);
console.log('==== slice ====');
res = arr.slice(2,6);//отображает элементы массива в указанном диапазоне конечнный диапазон не отображает
console.log(arr);//не меняет исходный массив 
console.log(res);
console.log('==== splice ====');
res = arr.splice(1,4);//меняет исходный массив вырезает элементы массива внутри включая старт и финиш
//возвращает вырезанный элемент массива принимает откуда начать и к-во сколько вырезать   
console.log(arr);
console.log(res);


console.log('====spred====');
const uniteArr = [...arr1,...arr2]; //... spred исходный массив не меняется 
console.log(arr1); 
console.log(arr2);
console.log(uniteArr); 

let arr4 = [1,2,3];
let arr5 = [...arr4];//глубокая копия массива. изменение одного массива не повлечёт изменение второго

//arr5=arr4; // поверхностная копия массива, изменение одного массива повлечёт изменение второго

arr5[0] = 100;
console.log(arr5);
console.log(arr4);

console.log('===destructure===');
const [a,b,c,d] = arr4;//arr4=[1,2,3]
console.log(a,b,c,d);
