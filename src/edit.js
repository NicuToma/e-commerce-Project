//edit product
let edit = document.querySelectorAll(".fa-edit");
edit.addEventListener("load", async () => {
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
  document.querySelector(".edit-box").innerHTML = productCard;
});
