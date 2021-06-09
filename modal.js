//**********************************************************************************************************
// DOM Elements
//**********************************************************************************************************

// Variable modal
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeIcon = document.querySelector(".close");

// Variable Form
const formData = document.querySelectorAll(".formData");
const checkboxInputList = document.getElementsByName("location");

const inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="number"]'
);

// Storage Variable
let firstName, secondName, email, birthdate, quantity;

const submitModal = document.querySelector(".btn-submit");
const form = document.querySelector("form");
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

// First Name Section
const firstNameChecker = (value) => {
  const firstNameInput = document.getElementById("firstName");
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
  const secondNameInput = document.getElementById("secondName");
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
  const emailInput = document.getElementById("email");
  const form = document.getElementById("form3");

  if (value.length <= 0 || !value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    form.setAttribute("data-error-visible", "true");
    form.setAttribute("data-error", "Entrez une adresse Mail Valide!");
    email = null;
  } else {
    form.setAttribute("data-error-visible", "false");
    email = value;
  }
};

// Quantity Section
const quantityChecker = (value) => {
  const quantityInput = document.getElementById("quantity");
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
const radioLocation = document.getElementById("radioLocation");
//Function Verification Button Radio Checked
checkboxInputList.forEach((location) => {
  if (location.checked === true) {
    return true;
  } else {
    return false;
  }
});

/*// Submit Section
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (firstName && secondName && email && quantity) {
    const data = {
      firstName,
      secondName,
      email,
      quantity,
    };

    firstName = null;
    secondName = null;
    email = null;
    quantity = null;
  } else {
    alert("veuillez remplir tout les champs!");
  }
});*/
