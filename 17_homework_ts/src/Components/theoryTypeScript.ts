let firstName:string = 'Danny'; //typeof firstName = string
// задаем тип данных в случае не обязательно потому что примет тип значения 

let age: number | string; //typeof age = number or string
age = 26;
age = '26';

let userName: any = 'Andrew'; // typeof userName = любой тип данных
userName = 23;
userName ='false';
userName = false;

let direction: 'UP' | 'DOWN'; //typeof age = number or string
age = 26;
age = '26';

let person:{ //Описали обьект переменную person: обьект с полями fullName и isProgrammer соответствующих типов данных
    fullName: string,
    isProgrammer: boolean
};

person = { //Создали єкземпляр обьекта person, который соотвествует заданной типизации
    fullName: 'Bill Parker',
    isProgrammer: false
}

// person.age = 10; 
//ERROR - нет ключа age в описании обьекта person

// person.isProgrammer = 'Yes'; 
//ERROR - нет ключа isProgrammer в описании обьекта person

let ids: number[] = [];
ids.push(1);
// ids.push('2'); not a number
let option: (string | number)[];
option = [10, 'left'];

let persons = ['Delia', 'Alex'];
// persons[0] = 43; не ясная типизация по значению элемента по тому эе индексу при создании масива

function circle(diam:number):string {
    return 'Circle = '+ Math.PI*diam;
}

let sayHi:(name:string) => void;//описали тип стрелочной функции
sayHi =(name:string) =>console.log('Hi'+name);//прописали ее 

//npx create-react-app homework - для java script 
//npx create-react-app homework_ts --template typescript - для typescript project (homework_ts название проэкта)

interface IPerson {
    fullName: string,
    isProgrammer: boolean
}

let p1 : IPerson = {
    fullName: 'Malboro',
    isProgrammer: false,
}

// p1.fullName = 'Vasiliy'; Error read only !

// Предположим, в переменную age попадает результат функции getUserAge(),
// который может быть строкой или числом
// age = getUserAge();
// age => string|number 

//if(typeof age === 'string'){
// age =+age; любое действие данный код для примера
//}
//<T> это синтаксис дженерика Дженерик позволяет более универсально описывать  interface будущих элементов
//если информация о типе 1 или несколько переменных будет известна только при создании отдельного нового экземпляра
interface IDog<T>{
    bread: string,
    treasts: T
}

//При создании обьекта labrador указываем недостающий тип поля обьекта
let lambrador: IDog<string> ={
    bread: 'lambrador',
    treasts: 'chew sticks, tripe'
}

//При создании обьекта labrador указываем недостающий тип поля обьекта
let scottieDog: IDog<string[]>={
    bread: 'scottish terrier',
    treasts:['turkey', 'haggis']
}

// const form = document.getElementById('form'); as HTMLFormElement 
