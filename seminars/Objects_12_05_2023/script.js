const eComStore = {
    products: [
        {
        id:1,
        productName:'Product A',
        price:10,
        category:this.categories[0] || {},
        quantity: 5
        }
    ],
    categories: [
    
        {'A': 'A'},
        {'B': 'B'}
    ],
    users:[
        {
            id:1,
            nickName: 'user A',
            email: 'user@example.com',
            password: 'password'
        }
    ],
    addProduct(name, price, category, quantity){
        const id = this.products.length+1;
        const product = {id, name , price, category, quantity};
        this.products.push(product);
    },
    removeProduct(id){
        const index = this.products.findIndex(p=>p.id===id);
        if(index !== -1){
            this.products.splice(index,1);
        }
    },
    getProductById(id){
        return this.products.find(p=>p.id == id);
    },
    getProductByCategory(category){
        return this.products.filter(p=>p.category == category);
    },
    createUser(nickName, email, password){
        const id = this.users.length+1; 
        const user = {id, nickName,email,password};
        this.users.push(user);
        return user;
    },
    removeUser(id){
        const index = this.users.findIndex(u=>u.id===id);
        if(index !== -1){
            this.users.splice(index,1);
        }
    },
    getUserById(id){
        return this.users.find(u=>u.id === id);
    }
}


addProduct.onclick = addProductHandler;

function addProductHandler(productName1, price1, category1,quantity1){
    console.log(productName.value.trim());
    productName1 = productName.value.trim();
    eComStore.addProduct(productName1,price1, category1,quantity1);
    }
addPerson.onclick = createUser();
