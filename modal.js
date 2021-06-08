//**********************************************************************************************************
// DOM Elements
//**********************************************************************************************************

const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeIcon = document.querySelector(".close");
const checkboxInputList = document.querySelectorAll(".checkbox-input");

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="date"], input[type="number"]'
);

//*********************************************************************************************************
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
//*********************************************************************************************************

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "firstName":
        firstNameChecker(e.target.value);
        break;
      case "secondName":
        secondNameChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});

//*********************************************************************************************************
// Function Arrow Checker (Verification of Validate Data)
//*********************************************************************************************************

let firstName, secondName, email, birthdate, quantity;

// First Name Section
const firstNameChecker = (value) => {
  const firstName = document.getElementById("firstName");
  const form = document.getElementById("form1");
  if (value.length < 2 || value.length === 0) {
    form.setAttribute("data-error-visible", "true");
    form.setAttribute("data-error", "veuillez tapez plus que 2 caractères!");
    firstName = null;
  } else {
    form.setAttribute("data-error-visible", "false");
    firstName = value;
  }
};

// Second Name Section
const secondNameChecker = (value) => {
  const secondName = document.getElementById("secondName");
  const form = document.getElementById("form2");
  if (value.length < 2 || value.length === 0) {
    form.setAttribute("data-error-visible", "true");
    form.setAttribute("data-error", "veuillez tapez plus que 2 caractères!");
    secondName = null;
  } else {
    form.setAttribute("data-error-visible", "false");
    secondName = value;
  }
};

// Email Section
const emailChecker = (value) => {
  const email = document.getElementById("email");
  const form = document.getElementById("form3");

  if (value.length < 1 || !value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    form.setAttribute("data-error-visible", "true");
    form.setAttribute("data-error", "Entrez une adresse Mail Valide!");
    email = null;
  } else {
    form.setAttribute("data-error-visible", "false");
    email = value;
  }
};

//Quantity Section
const quantityChecker = (value) => {
  const quantity = document.getElementById("quantity");
  const form = document.getElementById("form4");

  if (value <= 0 || value === null || value === undefined) {
    form.setAttribute("data-error-visible", "true");
    form.setAttribute("data-error", "veuillez saisir un nombre!");
    quantity = null;
  } else {
    form.setAttribute("data-error-visible", "false");
    quantity = value;
  }
};

//Location Section
checkboxInputList.forEach((checkbox) => {
  if (checkbox.checked === true) {
    return true;
  } else {
    return false;
  }
});
