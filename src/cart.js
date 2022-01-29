window.addEventListener("load", cartItems);
function cartItems() {
  let cart = localStorage.getItem("cart");
  console.log(cart);
  let cartItems = JSON.parse(cart);
  console.log(cartItems);

  const productCard = cartItems
    .map(
      (product) =>
        `<div class="cart-item-card">
            <img src=${product.imageURL} alt="image missing" />
            <h5>${product.name}</h5>
            
            <div class="quantity">
                <input type="button" value="-" id="countDown" onclick="countDown()" />
      
                <p id="count">0</p>
      
                <input type="button" value="+" id="countUp" onclick="countUp()" />
            </div>
            <div class="price">
                <span id="priceValue">€ ${product.price}</span>
            </div>
            <button id="update">Update</button>
            <button id="deleteItem"><i class="fas fa-trash-alt"></i></button>
                    
        </div>
      
      </div>`
    )
    .join("");

  document.querySelector(".cart-items").innerHTML = productCard;
  function incrementNumber() {
    if (value < 10) {
      value++;
    } else {
      value = 0;
    }
    counterParagraph.innerHTML = value;
  }
  function decrementNumber() {
    if (value > 0) {
      value--;
    } else {
      value = 10;
    }

    counterParagraph.innerHTML = value;
  }
}
