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
                   <span class="adminProductPrice">Price: €  </span>
                   <span class="adminProductPriceValue">${product.price}</span>
                </div>
                <div class="productDetails">
                    <p>${product.description}</p>
                </div>
                <div class="edit">
                    <a href="#" class="deleteItem"><i item-id=${product.id} class="far fa-trash-alt"></i></a>
                    <a href="#" class="editItem"><i item-id=${product.id} class="far fa-edit"></i></a>
                </div>

        </div>`
    )
    .join("");
  document.querySelector(".admin-products").innerHTML = productCardsString;

  //delete product
  let btns = document.querySelectorAll(".fa-trash-alt");

  for (let i = 0; i <= btns.length - 1; i++) {
    btns[i].addEventListener("click", deleteItem);
    function deleteItem(event) {
      let deleteBtn = event.target;
      console.log(event.target);
      if (deleteBtn.classList.contains("fa-trash-alt")) {
        deleteBtn.parentNode.parentNode.parentNode.remove();

        console.log(deleteBtn);
      }
    }
  }
  let edit = document.querySelectorAll(".fa-edit");

  for (let j = 0; j <= edit.length - 1; j++) {
    edit[j].addEventListener("click", editItem);
    function editItem(event) {
      let editBtn = event.target;
      console.log(event.target);
      if (editBtn.classList.contains("fa-trash-alt")) {
        console.log(event.target);
      }
    }
  }
}
