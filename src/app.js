window.addEventListener("load", fetchProducts);

async function fetchProducts() {
  let result = await fetch(
    "https://61e06cc763f8fc0017618752.mockapi.io/products"
  );
  let products = await result.json();
  console.log(products);

  let productCardsString = products
    .map(
      (product) =>
        `<div class="product-card">
            <h5 id="name">${product.name}</h5>
            <img src=${product.imageURL} alt="image missing" />
            <div class="price">
                <span class="priceOf">Price: € </span>
                <span class="priceValue">${product.price}</span>
            </div>
            <a href="detail.html?id=${product.id}"><button class="details">Details</button></a>
            
        </div>`
    )
    .join("");

  document.querySelector(".products-cards-grid").innerHTML = productCardsString;
}

let bikes = document.getElementById("bikes");

bikes.addEventListener("click", fetchProductsBikes);

async function fetchProductsBikes() {
  let resultBikes = await fetch(
    "https://61e06cc763f8fc0017618752.mockapi.io/bikes"
  );

  let productsBikes = await resultBikes.json();

  let productCardsStringmtb = productsBikes
    .map(
      (product) =>
        `<div class="product-card">
                <h5 id="name">${product.name}</h5>
                <img src=${product.imageURL} alt="image missing" />
                <div class="price">
                    <span class="priceOf">Price: € </span>
                    <span class="priceValue">${product.price}</span>
                </div>
                <a href="detail.html?id=${product.id}"><button class="details">Details</button></a>
                
            </div>`
    )
    .join("");

  document.querySelector(".products-cards-grid").innerHTML =
    productCardsStringmtb;
}

let protection = document.getElementById("protection");
protection.addEventListener("click", fetchProductsProtection);

async function fetchProductsProtection() {
  let resultProtection = await fetch(
    "https://61e06cc763f8fc0017618752.mockapi.io/protection"
  );

  let productsProtection = await resultProtection.json();

  let productCardsStringmtb = productsProtection
    .map(
      (product) =>
        `<div class="product-card">
                <h5 id="name">${product.name}</h5>
                <img src=${product.imageURL} alt="image missing" />
                <div class="price">
                    <span class="priceOf">Price: € </span>
                    <span class="priceValue">${product.price}</span>
                </div>
                <a href="detail.html?id=${product.id}"><button class="details">Details</button></a>
                
            </div>`
    )
    .join("");

  document.querySelector(".products-cards-grid").innerHTML =
    productCardsStringmtb;
}

let wear = document.getElementById("wear");
wear.addEventListener("click", fetchProductsWear);

async function fetchProductsWear() {
  let resultWear = await fetch(
    "https://61e06cc763f8fc0017618752.mockapi.io/wear"
  );

  let productsWear = await resultWear.json();

  let productCardsStringmtb = productsWear
    .map(
      (product) =>
        `<div class="product-card">
                <h5 id="name">${product.name}</h5>
                <img src=${product.imageURL} alt="image missing" />
                <div class="price">
                    <span class="priceOf">Price: € </span>
                    <span class="priceValue">${product.price}</span>
                </div>
                <a href="detail.html?id=${product.id}"><button class="details">Details</button></a>
                
            </div>`
    )
    .join("");

  document.querySelector(".products-cards-grid").innerHTML =
    productCardsStringmtb;
}
