window.addEventListener("load", async () => {
  let searchParamString = window.location.search;
  const searchParam = new URLSearchParams(searchParamString);
  const productId = searchParam.get("id");
  const productURL = `https://61e06cc763f8fc0017618752.mockapi.io/products/${productId}`;
  const result = await fetch(productURL);
  const product = await result.json();

  const productCard = `
       <div class="card">
           
           <div class="fotoCard">
                <h2>Product Details</h2>
                <h5>${product.name}</h5>
                <img src=${product.imageURL} alt="image missing" />
                <div class="price">
                    <span id="productPrice">Price: €  </span>
                    <span id="productPriceValue">${product.price}</span>
                </div>
                <button id=${product.id} class="add-to-cart btn ">Add to cart</button>
            </div> 
               
               	           
            <div class="productDetails">
	  			          <p>${product.description}</p>
		        </div>
            
          </div>
          
            
        </div>
  `;
  document.querySelector(".product-details").innerHTML = productCard;
});

document
  .querySelector(".product-details ")
  .addEventListener("click", addToCart);
async function addToCart(event) {
  const addToCartBtn = event.target;
  console.log(addToCartBtn);
  let productId = addToCartBtn.getAttribute("id");

  const productURL = `https://61e06cc763f8fc0017618752.mockapi.io/products/${productId}`;
  const result = await fetch(productURL);
  const product = await result.json();

  let cart;
  if (localStorage.getItem("cart") == null) {
    cart = [product];
  } else {
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(product);
  }

  console.log(cart);

  localStorage.setItem("cart", JSON.stringify(cart));
}
