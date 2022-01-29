let submitBtn = document.querySelector(".btn");
submitBtn.addEventListener("click", validate);

function validate() {
  let user = document.querySelector("#userName");
  let password = document.querySelector("#pwd");
  if (user.value == "" || user.value != "NicuT" || user.value == null) {
    alert("Please type a valid user!");
  } else if (
    password.value == "" ||
    password.value != "Pass" ||
    password.value == null
  ) {
    alert("Insert your password");
  } else {
    window.open("adminProducts.html", "_blank");
  }
}
