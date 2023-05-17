function getFiveInSevenSec(){
    setTimeout(()=> {
        return 5;
    }, 7000);
}

let result = getFiveInSevenSec();
console.log(`${result}`); // undefined потому что синхронный код не дождался значения 

let promise = new Promise(function(resolved, reject){
    setTimeout(()=>{
        resolved(5);
    }, 7000);
});
console.log(promise);

promise.then((value)=>{
   console.log(value);
})

let promise2 = new Promise(function(resolved, reject){
setTimeout(()=>{
    reject(new Error('Ошибка, ничего не пришло назад'));
},7000);
});

promise2
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})

let url = fetch('https://cataas.com/api/cats')
.then((value)=> value.json())
.then((data)=> console.log(data))