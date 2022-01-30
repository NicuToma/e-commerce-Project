window.addEventListener("load", cartItems);
function cartItems() {
  let cart = localStorage.getItem("cart");

  let cartItems = JSON.parse(cart);
  console.log(cartItems);
  const productCard = cartItems
    .map(
      (product) =>
        `<div class="cart-item-card">
            <img src=${product.imageURL} alt="image missing" />
            <h5>${product.name}</h5>
            
            <div class="quantity">
                <input type="button" value="-" class="countDown" />
      
                <p class="count">1</p>
      
                <input type="button" value="+" class="countUp" />
            </div>
            <div class="price">
                <span class="priceValue"> ${product.price}</span>
            </div>
            <button classs="update">Update</button>
            <button class="deleteItem"><i class="fas fa-trash-alt"></i></button>
            <span class="itemTotalPrice">0</span>
                  
        </div>
      
      </div>`
    )
    .join("");

  document.querySelector(".cart-items").innerHTML = productCard;

  //count items in cart
  let itemNumber = cartItems.length;
  document.querySelector(".countProducts").innerHTML = itemNumber;
  totalProductPrice();

  let plus = document.querySelector(".countUp");
  let minus = document.querySelector(".countDown");
  let value = Number(document.querySelector(".count").innerHTML);

  // let counterParagraph = document.querySelector(".count");

  plus.addEventListener("click", incrementNumber);
  minus.addEventListener("click", decrementNumber);

  function incrementNumber() {
    if (value < 100) {
      value++;
    } else {
      value = 1;
    }
    document.querySelector(".count").innerHTML = value;
  }
  function decrementNumber() {
    if (value > 1) {
      value--;
    } else {
      value = 1;
    }

    document.querySelector(".count").innerHTML = value;
  }
  //count total product price

  function totalProductPrice() {
    let price = Number(document.querySelector(".priceValue").innerHTML);
    let countItem = Number(document.querySelector(".count").innerHTML);
    let itemPrice = Number(price) * Number(countItem);
    document.querySelector(".itemTotalPrice").innerHTML = itemPrice;
  }

  //delete product
  btns = document.getElementsByClassName("deleteItem");
  for (let i = 0; i <= btns.length - 1; i++) {
    btns[i].addEventListener("click", deleteItem);

    function deleteItem(event) {
      let deleteBtn = event.target;
      if (deleteBtn.classList.contains("fas")) {
        deleteBtn.parentNode.parentNode.remove();
      }
    }
  }
}
