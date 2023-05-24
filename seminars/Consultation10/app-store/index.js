const container = document.getElementById("container");

async function loadProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  console.log(products);
  products.forEach(({ category, description, price, rating, title, id, image }) => {
    console.log(id);
    const cardHTML =
    `<div class="productCard" id="productCard${id}">
    <h3 class="cardHeading">${title}</h3>
    <img src="${image}" alt="" srcset="">
    <p>${description}</p>
    <div>
      ${rating}
    </div>
    <div>
      ${price}
    </div>
    </div>`;
    container.insertAdjacentHTML('beforeend', cardHTML);
  });

}

loadProducts();