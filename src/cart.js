let total = 0;
let noItems = 0;
let cart = JSON.parse(localStorage.getItem("cart"));

window.addEventListener("load", () => {
  // if empty cart return shopping
  if (cart.length == 0) {
    document.querySelector(".cart-body").innerHTML = ` <a href="index.html" 
    ><img src="./logo/mountain-bike.png" alt="logo"
    />Your cart is empty: Back to store!</a>`;
  }

  //calculate toatal price
  if (cart) {
    cart.forEach((product) => {
      total = total + Number(product.price) * product.itemNo;
      noItems = noItems + product.itemNo;
    });
    const productCard = cart
      .map(
        (product) =>
          `<div class="cart-item-card" >
          <div class="imgName">
              <a href="detail.html?id=${product.id}"><img src=${product.imageURL} alt="image missing" /></a>
              <h5 class="productName">${product.name}</h5>
          </div>
              
              <div class="quantity">
                <button item-id=${product.id} class="decreaseNoOfProducts"> - </button>
                    <span  class="count-products">${product.itemNo}</span>
                <button item-id=${product.id} class="increaseNoOfProducts "> + </button>
              </div>          
              <p item-id=${product.id} class="priceValue">Price: ${product.price}</p>  
                   
              <button item-id=${product.id} class="deleteItem"><i item-id=${product.id} class="fas fa-trash-alt"></i></button>                     
          </div> `
      )
      .join("");
    document.querySelector(".cart-items").innerHTML = productCard;

    let totalPrice = ` ${total}`;

    document.querySelector(".sumOfProducts").innerHTML = totalPrice;
    document.querySelector(".noOfItemsInCart").innerHTML = noItems;
  }
});

const cartItemsContainer = document.querySelector(".cart-body");
cartItemsContainer.addEventListener("click", CartActions);

// cart actions
function CartActions(event) {
  const targetButton = event.target;

  let cart = JSON.parse(localStorage.getItem("cart"));

  let itemInCart = cart.find(
    (itemFromCart) => itemFromCart.id == targetButton.getAttribute("item-id")
  );
  let quantityParagraph = targetButton.parentNode.parentNode;

  // increase or decrease quantity
  if (targetButton.classList.contains("increaseNoOfProducts")) {
    itemInCart.itemNo++;
  } else if (targetButton.classList.contains("decreaseNoOfProducts")) {
    if (itemInCart.itemNo > 1) {
      itemInCart.itemNo--;
    }
    //delete product
  } else if (targetButton.classList.contains("fa-trash-alt")) {
    itemInCart.itemNo = 0;
    cart = cart.filter((product) => product.id != itemInCart.id);
    targetButton.parentNode.parentNode.remove();
  }

  //if cart becomes empty return to home page
  localStorage.setItem("cart", JSON.stringify(cart));
  if (cart.length == 0) {
    document.querySelector(".cart-body").innerHTML = ` <a href="index.html" 
    ><img src="./logo/mountain-bike.png" alt="logo"
    />Your cart is empty: Back to store!</a>`;
  }

  //total price update & update number of items in cart
  if (itemInCart) {
    quantityParagraph.querySelector(".count-products").innerHTML =
      itemInCart.itemNo;

    let noItems = 0;
    let total = 0;
    cart.forEach((product) => {
      total = total + Number(product.price) * product.itemNo;
      noItems = noItems + product.itemNo;
    });
    let totalPrice = ` ${total}`;
    document.querySelector(".sumOfProducts").innerHTML = totalPrice;
    document.querySelector(".noOfItemsInCart").innerHTML = noItems;
  }
  document.querySelector(".checkout").addEventListener("click", checkout);
  function checkout() {
    alert("YOU WILL BE REDIRECTED TO THE PAYMENT PAGE! ");
  }
}
