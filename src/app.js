window.addEventListener("load", fetchProducts);

async function fetchProducts() {
  let result = await fetch(
    "https://61e06cc763f8fc0017618752.mockapi.io/products"
  );
  let products = await result.json();

  let productCardsString = products
    .map(
      (product) =>
        `<div class="product-card">
            <h5>${product.name}</h5>
            <img src=${product.imageURL} alt="image missing" />
            <div class="price">
                <span id="priceOf">Price: €  </span>
                <span id="priceValue">${product.price}</span>
            </div>
            <div class="details">
                <a href="detail.html?id=${product.id}">Details</a>
                <a href="#"><i class="fas fa-cart-plus"></i></a>
            </div>
        </div>`
    )
    .join("");

  document.querySelector(".products-cards-grid").innerHTML = productCardsString;
}
