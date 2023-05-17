const eComStore = {
    products: [],
    categories: [{ A: "A" }, { B: "B" }],
    users: [],
    addProduct(productName, price, category, quantity) {
        const id = this.products.length + 1;
        const product = { id, productName, price, category, quantity };
        if (id && productName && price && category && quantity) {
            this.products.push(product);
        }
    },
    removeProduct(id) {
        const index = this.products.findIndex((p) => p.id == id);
        console.log(index);
        if (index !== -1) {
            this.products.splice(index, 1);
        }
    },
    getProductById(id) {
        return this.products.find((p) => p.id === id);
    },
    getProductByCategory(category) {
        return this.products.filter((p) => p.category === category);
    },
    addUser(nickName, email, password) {
        const id = this.users.length + 1;
        const user = { id, nickName, email, password };
        this.users.push(user);
        return user;
    },
    removeUser(id) {
        const index = this.users.findIndex((u) => u.id == id);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    },
    getUserById(id) {
        return this.users.find((u) => u.id === id);
    },
};

const addProduct = document.getElementById("addProduct");
const addProductList = document.getElementById("addProductList");
const addUser = document.getElementById("addUser");
const addUserList = document.getElementById("addUserList");

addProductList.addEventListener("click", (e) => {
    console.log(e);
    const id = e.target.previousSibling.textContent.split(",")[0].split(" ")[1];
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        eComStore.removeProduct(id);
    }
});

addUserList.addEventListener("click", (e) => {
    console.log(e);
    const id = e.target.previousSibling.textContent.split(",")[0].split(" ")[1];
    console.log(id);
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
        eComStore.removeUser(id);
    }
});

addProduct.onclick = addProductHandler;
addUser.onclick = addUserHandler;

addProduct.addEventListener("keydown", (e) => {
    console.log(e);
});

function addProductHandler() {
    const productName = document.getElementById("productName").value.trim();
    const price = document.getElementById("price").value.trim();
    const category = document.getElementById("category").value.trim();
    const quantity = document.getElementById("quantity").value.trim();

    addProductList.innerHTML = "";

    eComStore.addProduct(productName, price, category, quantity);

    eComStore.products.forEach((e) => {
        console.log(e);
        const li = document.createElement("li");
        li.innerHTML = `<span>ID: ${e.id},
                          Product name: ${e.productName},
                          Price: ${e.price},
                          Category: ${e.category},
                          Quantity: ${e.quantity}</span><button>Delete</button>`;
        addProductList.append(li);
    });
}


function addUserHandler() {
    const nickName = document.getElementById("nickName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    addUserList.innerHTML = "";

    eComStore.addUser(nickName, email, password);

    eComStore.users.forEach((e) => {
        console.log(e);
        let str = '';
        for (let i = 0; i < e.password.length; i++) {
            str += '*';
        }
        const li = document.createElement("li");
        li.innerHTML = `<span>ID: ${e.id},
                              Nickname: ${e.nickName},
                              Email: ${e.email},
                              Password: ${str},
                        </span><button>Delete</button>`;
        addUserList.append(li);
    });
}