let total = 0;
let cart = JSON.parse(localStorage.getItem("cart"));

window.addEventListener("load", () => {
  console.log(cart);
  // let total = 0;

  if (cart.length == 0) {
    document.querySelector(".sumary").innerHTML = ` <a href="index.html"
    ><img src="./logo/mountain-bike.png" alt="logo"
  />Continue Shopping</a>`;
  }
  //calculate toatal price
  if (cart) {
    cart.forEach((product) => {
      total = total + Number(product.price) * product.itemNo;
      // console.log(typeof product.itemNo);
      // console.log(product.price);
    });
    const productCard = cart
      .map(
        (product) =>
          `<div class="cart-item-card" >
              <img src=${product.imageURL} alt="image missing" />
              <h5 class="productName">${product.name}</h5>
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
    // console.log(totalPrice);
    document.querySelector(".sumOfProducts").innerHTML = totalPrice;
    // console.log(Number(totalPrice));
  }
});

const cartItemsContainer = document.querySelector(".cart-body");
cartItemsContainer.addEventListener("click", CartActions);
// Cart actions
function CartActions(event) {
  const targetButton = event.target;
  console.log(event.target);
  let cart = JSON.parse(localStorage.getItem("cart"));

  let itemInCart = cart.find(
    (itemFromCart) => itemFromCart.id == targetButton.getAttribute("item-id")
  );
  let quantityParagraph = targetButton.parentNode.parentNode;
  console.log(quantityParagraph);

  // increase quantity

  if (targetButton.classList.contains("increaseNoOfProducts")) {
    console.log(itemInCart.itemNo);
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

  localStorage.setItem("cart", JSON.stringify(cart));
  //Total price update
  if (itemInCart) {
    quantityParagraph.querySelector(".count-products").innerHTML =
      itemInCart.itemNo;

    let total = 0;
    cart.forEach((product) => {
      total = total + Number(product.price) * product.itemNo;
    });
    let totalPrice = ` ${total}`;
    document.querySelector(".sumOfProducts").innerHTML = totalPrice;
  }
}
