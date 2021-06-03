//**********************************************************************************************************
// DOM Elements
//**********************************************************************************************************

const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeIcon = document.querySelector(".close");

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="date"], input[type="number"]'
);

// ********************************************************************************************************
// Function button navigation (screen max-width:768px)
//*********************************************************************************************************

function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += "responsive";
  } else {
    x.className = "topnav";
  }
}

// ********************************************************************************************************
// Open Close form
//*********************************************************************************************************

// launch modal form
function launchModal() {
  modalBg.style.display = "block";
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal form
function closeModal() {
  modalBg.style.display = "none";
}

// Close modal event
closeIcon.addEventListener("click", closeModal);

//*********************************************************************************************************
// Search Value enter by User
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "firstName":
        firstName(e.target.value);
        break;
      case "secondName":
        secondName(e.target.value);
        break;
      case "email":
        email(e.target.value);
        break;
      case "birthdate":
        birthday(e.target.value);
        break;
      case "quantity":
        quantity(e.target.value);
        break;
      default:
        null;
    }
  });
});

const firstName = (value) => {
  if (value.length < 2) {
  }
};
const secondName = (value) => {};
const email = (value) => {};
const birthdate = (value) => {};
const quantity = (value) => {};
