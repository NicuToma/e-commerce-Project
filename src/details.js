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
              <h6>${product.name}</h6>
              <img src=${product.imageURL} alt="image missing" class="resizeImg" onclick="fullSize()"/>                          
              <div class="price">
                  <p id="productPrice">Price: €  </p>
                  <p id="productPriceValue">${product.price}</p>
               </div>  
               <button item-id=${product.id} class="add-to-cart  ">Add to cart</button>                           
          </div>   
               	           
          <div class="productDetails">
                <h2>Product Details</h2>
	  			      <p>${product.description}</p>
		      </div>
            
      </div>        
  `;
  document.querySelector(".product-details").innerHTML = productCard;
  // no of items in cart on page load
  let noItems = 0;
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    cart.forEach((product) => {
      noItems = noItems + product.itemNo;
    });
    document.querySelector(".noOfItemsInCart").innerHTML = noItems;
  }
});

document.querySelector(".product-details").addEventListener("click", addToCart);
async function addToCart(event) {
  const addToCartBtn = event.target;
  if (addToCartBtn.classList.contains("add-to-cart")) {
    let productId = addToCartBtn.getAttribute("item-id");

    const productURL = `https://61e06cc763f8fc0017618752.mockapi.io/products/${productId}`;
    const result = await fetch(productURL);
    const product = await result.json();

    let cart = [];
    if (localStorage.getItem("cart") == null) {
      cart.push({ ...product, itemNo: 1 });
    } else {
      cart = JSON.parse(localStorage.getItem("cart"));
      const addedItem = cart.find((itemInCart) => itemInCart.id == product.id);

      if (addedItem != undefined) {
        addedItem.itemNo++;
        window.alert("Your product have been added to cart!");
      } else {
        const itemToAdd = { ...product, itemNo: 1 };
        cart.push(itemToAdd);
      }
    }

    if (cart.length > 0) localStorage.setItem("cart", JSON.stringify(cart));
  }
}
