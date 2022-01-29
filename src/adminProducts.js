window.addEventListener("load", fetchProducts);

async function fetchProducts() {
  let result = await fetch(
    "https://61e06cc763f8fc0017618752.mockapi.io/products"
  );
  let products = await result.json();
  let productCardsString = products
    .map(
      (product) =>
        `<div class="admin-product-card">
               <div class="card-foto">
                    <img src=${product.imageURL} alt="image missing" />
                    <h6>${product.name}</h6>
               </div>              
               
               <div class="admin-price">
                   <span id="adminProductPrice">Price: €  </span>
                   <span id="adminProductPriceValue">${product.price}</span>
                </div>
                <div class="productDetails">
                    <p>${product.description}</p>
                </div>
                <div class="edit">
                    <a href="#" id="deleteItem"><i class="far fa-trash-alt"></i></a>
                    <a href="#" id="editItem"><i class="far fa-edit"></i></a>
                </div>

        </div>`
    )
    .join("");
  document.querySelector(".admin-products").innerHTML = productCardsString;
}
