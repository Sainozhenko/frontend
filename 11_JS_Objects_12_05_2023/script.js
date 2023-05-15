console.log('===== object =====');

const parentObject = {
    userName: 'Mary',
    age: 50,
    sayHello: function() {
        console.log(`Hello from parent, ${this.userName}`);
    }
};

const childObject = Object.create(parentObject);
childObject.userName = 'Jane';
childObject.sayHello = function() {
    console.log(`Hello from child, ${this.userName}`);
}

childObject.sayHello(); // 'Hello from child, Jane'

/*  items: [],      item => name, price, quantity
    totalCost: 0,
    addItem
    removeItem
    updateTotalCost
*/ 

const shoppingCart = {
    items: [], // массив товаров;
    totalCost: 0,
    addItem(item) {
        // for (let i = 0; i < this.items.length; i++) {
        //     return this.items[i].name === item.name ? this.items[i] : undefined; 
        // }

        const existingItem = this.items.find(e => e.name === item.name);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            if(item.name && item.price&& item.quantity){
            this.items.push(item);

            }
        }
        this.updateTotalCoast();
    },
    removeItem(itemName) {
        const index = this.items.findIndex((i) => i.name === itemName);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
        this.updateTotalCoast();
    },
    updateTotalCoast() {
        this.totalCost = this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }
}

// shoppingCart.addItem({name: 'Milk', price: 20, quantity: 2});
// shoppingCart.addItem({name: 'Bread', price: 13, quantity: 4});
// shoppingCart.addItem({name: 'Beef', price: 100, quantity: 14});
// console.log(shoppingCart.totalCost);
// shoppingCart.removeItem('Beef');
// console.log(shoppingCart.totalCost);

add.onclick = addHandler;
stats.onclick = statsHandler;

add.addEventListener('keydown', (e)=>{
    if(e.key==='Enter'){
        console.log('Hello from event listener');
    }
})

function addHandler() {

    shoppingCart.addItem({
        name: productName.value.trim(),
        price: +price.value.trim(),
        quantity: +quantity.value.trim()
    });
    productList.innerHTML = '';
    shoppingCart.items.forEach(e => {
        const li = document.createElement('li');
        li.textContent = `Product name: ${e.name}, Product price: ${e.price}, quantity of product: ${e.quantity}`;
        productList.append(li);
    })
    

    // const text = 
}

function statsHandler() {
    // Количество позиций,
    // total coast of all products,
    // quantity of all products,
    // max price of product,
    // min price of product,
    // avg price of product
if (shoppingCart.items.length) {
        const avgPrice = shoppingCart.items.reduce((total, el) => total + el.price, 0) / shoppingCart.items.length;
        const minPrice = shoppingCart.items.sort((a, b) => a.price - b.price)[0].price;
        const maxPrice = shoppingCart.items.sort((a, b) => b.price - a.price)[0].price;
        const totalQuantity = shoppingCart.items.reduce((total, el) => total + el.quantity, 0);
        const totalCoast = shoppingCart.items.reduce((total, el) => total + el.quantity * el.price, 0);
        const itemsQuantity = shoppingCart.items.length;
    
        const statsContainer = document.getElementById('statsContainer');
            statsContainer.innerHTML = `
                <p>Average Price: ${avgPrice %1 ? avgPrice.toFixed(2) :avgPrice }</p>
                <p>Min Price: ${minPrice %1 ? minPrice.toFixed(2): minPrice}</p>
                <p>Max Price: ${maxPrice%1 ? maxPrice.toFixed(2):maxPrice}</p>
                <p>Total Quantity: ${totalQuantity}</p>
                <p>Total Cost: ${totalCoast%1? totalCoast.toFixed(2):totalCoast}</p>
                <p>Number of Items: ${itemsQuantity}</p>
            `;
        } 
    else {
    const statsContainer = document.getElementById('statsContainer');
            statsContainer.innerHTML = 'The shopping cart is empty.';
        }
    }

    // const maxPrice = shoppingCart.items.sort((a, b) => a.price - b.price)[shoppingCart.items.length - 1].price;


console.log('===== class =====');

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = +age;
    }
    
    sayHello() {
        console.log('Hello');
    }
}

class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);
        this.jobTitle = jobTitle;
    }

    sayHello() {
        super.sayHello();
        console.log('I am an employee');
    }
}

const john = new Employee('John', 30, 'Software Engineer');
console.log(john.name); // 'John'
console.log(john.age); // 30
console.log(john.jobTitle); // 'Software Engineer'
console.log(john.sayHello()); // 'Hello', 'I am an employee'