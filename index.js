const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector(".form");
const errors = document.querySelectorAll(".error");
const error = Array.from(errors);


let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(error);
form.addEventListener("submit", (e) => {
    error[0].classList.remove("invalid");
    error[1].classList.remove("invalid");
    error[2].classList.remove("invalid");
    error[3].classList.remove("invalid");
    firstName.classList.remove("invalid");
    email.classList.remove("invalid");
    password.classList.remove("invalid");
    lastName.classList.remove("invalid");
    error[0].innerText = "";
    error[1].innerText = "";
    error[2].innerText = "";
    error[3].innerText = "";

  if (firstName.value === "") {
    firstName.classList.add("invalid");
    error[0].classList.add("invalid");
    error[0].innerText = "First name cannot be empty";
    e.preventDefault();
  }


  if (lastName.value === "") {
    lastName.classList.add("invalid");
    error[1].classList.add("invalid");
    error[1].innerText = "Last name cannot be empty";
    e.preventDefault();

  }

  if (!email.value.match(mailformat)) {
    email.classList.add("invalid");
    error[2].classList.add("invalid");
    error[2].innerText = "Look likes this is not an email";
    e.preventDefault();

  }

  if (email.value === "") {
    email.classList.add("invalid");
    error[2].classList.add("invalid");
    error[2].innerText = "Email cannot be empty";
    e.preventDefault();

  }

  if (password.value === "") {
    password.classList.add("invalid");
    error[3].classList.add("invalid");
    error[3].innerText = "Password cannot be empty";
    e.preventDefault();

  }

});

