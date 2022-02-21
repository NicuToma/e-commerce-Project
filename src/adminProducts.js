const productTable = document.querySelector(".body");
const addNewProductBtn = document.querySelector(".add-new-product");
const updateProductBtn = document.querySelector(".update-product");
//activate when mock api works
const productsURL = "https://61e06cc763f8fc0017618752.mockapi.io/products";

//using json localy when mock api doesn't work
// const productsURL = "products.json";
// const request = new XMLHttpRequest();
// request.open("GET", productsURL);
// request.responseType = "json";
// request.send();

// window.addEventListener("load", processData);
// function processData() {
//   const data = request.response;
//   const products = data.products;
//   fetchProducts(products);
// }
// end using local json

//activate when mock api works
window.addEventListener("load", fetchProducts);

async function fetchProducts() {
  //local json fetch
  // let result = await fetch("products.json");

  //activate when mock api works
  let result = await fetch(
    "https://61e06cc763f8fc0017618752.mockapi.io/products"
  );
  let products = await result.json();
  let productTable = products
    .map(
      (product) =>
        `
    <tr class= "productRow">
        <th scope="row">${product.id}</th>
            <td class="card-foto"> <img src=${product.imageURL} alt="image missing" /></td>
            <td class="prodName">${product.name}</td>
            <td> ${product.description}"</td>
            <td class="prodPrice">${product.price}</td>
            <td class="deleteItem"><a href="#" class="deleteItem"><i item-id=${product.id} class="far fa-trash-alt"></i></a></td>
            <td class="editItem"><a href="#" class="editItem"><i item-id=${product.id} class="far fa-edit"></i></a></td>
        </tr> `
    )
    .join("");
  document.querySelector(".body").innerHTML = productTable;

  //delete product from list
  let btns = document.querySelectorAll(".fa-trash-alt");

  for (let i = 0; i <= btns.length - 1; i++) {
    btns[i].addEventListener("click", deleteItem);
    async function deleteItem(event) {
      const productId = event.target.getAttribute("item-id");
      let deleteBtn = event.target;
      if (deleteBtn.classList.contains("fa-trash-alt")) {
        deleteBtn.parentNode.parentNode.parentNode.remove();
        let response = await fetch(`${productsURL}/${productId}`, {
          method: "DELETE",
        });
        fetchProducts();
      }
    }
  }
}

//add new product
addNewProductBtn.addEventListener("click", addNewProduct);

async function addNewProduct(event) {
  event.preventDefault();
  const newProductImg = document.getElementById("imgurl").value;
  const newProductName = document.getElementById("name").value;
  const newProductPrice = document.getElementById("price").value;
  const newProductDescription = document.getElementById("description").value;

  let response = await fetch(productsURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: newProductName,
      price: newProductPrice,
      description: newProductDescription,
      imageURL: newProductImg,
    }),
  });
  fetchProducts();
  let product = await response.json();

  let newProductTableRow = `<tr>
         <th scope="row">${product.id}</th>
            <td class="card-foto"> <img src=${product.imageURL} alt="image missing" /></td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td class="deleteItem"><a href="#" item-id=${product.id} class="deleteItem"><i item-id=${product.id} class="far fa-trash-alt"></i></a>
            </td>
          <td class="editItem"><a href="#" item-id=${product.id} class="editItem"><i item-id=${product.id} class="far fa-edit"></i></a></td>
      </tr>`;

  productTable.innerHTML += newProductTableRow;
}

//edit product
productTable.addEventListener("click", edit);

async function edit(event) {
  const productId = event.target.getAttribute("item-id");
  if (event.target.classList.contains("fa-edit")) {
    editProductById(productId);
  }
}

updateProductBtn.addEventListener("click", updateProduct);

async function updateProduct(event) {
  event.preventDefault();
  const productImg = document.getElementById("imgurl").value;
  const productName = document.getElementById("name").value;
  const productPrice = document.getElementById("price").value;
  const productDescription = document.getElementById("description").value;
  const productCategory = document.getElementById("category").value;
  // value from hidden input
  const productId = document.getElementById("productId").value;

  let response = await fetch(`${productsURL}/${productId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: productId,
      imageURL: productImg,
      name: productName,
      price: productPrice,
      description: productDescription,
      specs: productCategory,
    }),
  });

  let data = await response.json();

  fetchProducts();
}

async function editProductById(productId) {
  const productImgElement = document.getElementById("imgurl");
  const productNameElement = document.getElementById("name");
  const productPriceElement = document.getElementById("price");
  const productDescriptionElement = document.getElementById("description");
  const productCategoryElement = document.getElementById("category");
  const productIdHiddenElement = document.getElementById("productId");

  let response = await fetch(`${productsURL}/${productId}`);
  let product = await response.json();

  productImgElement.value = product.imageURL;
  productNameElement.value = product.name;
  productPriceElement.value = product.price;
  productDescriptionElement.value = product.description;
  productCategoryElement.value = product.specs;
  productIdHiddenElement.value = product.id;
}

//show inputs for add or edit product

const show = document.getElementById("showInputs");
show.addEventListener("click", showInputs);
const inputDiv = document.querySelector(".add-product");

function showInputs() {
  if (inputDiv.style.display !== "none") {
    inputDiv.style.display = "none";
  } else {
    inputDiv.style.display = "block";
  }
}
