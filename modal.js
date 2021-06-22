//**********************************************************************************************************
// DOM Elements
//**********************************************************************************************************

// Variable modal
const modalBg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeIcon = document.querySelector(".close");
const content = document.querySelector(".content");

// Variable Form
const formData = document.getElementById("formData");
console.log(formData);
const checkboxInputList = document.getElementsByName("location");
const inputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="number"]'
);
const submitModal = document.querySelector(".btn-submit");
const form = document.querySelector("form");
const modalBody = document.querySelector(".modal-body");

const confirmForm = document.getElementById("confirmForm");
const closeValidForm = document.getElementById("closeValidForm");
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
  input.addEventListener("change", (e) => {
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
      case "birthdate":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;
      case "checkbox1":
        termChecker(e.target.value);
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

// Birthdate Section
const birthdateChecker = (value) => {
  const form = document.getElementById("form4");

  if (value <= 0 || value === null || value === undefined) {
    form.setAttribute("data-error-visible", "true");
    form.setAttribute("data-error", "veuillez saisir une date!");
    birthdate = null;
  } else {
    form.setAttribute("data-error-visible", "false");
    birthdate = value;
  }
};

// Quantity Section
const quantityChecker = (value) => {
  const form = document.getElementById("form5");

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
const locationChecker = () => {
  const radios = document.getElementsByName("location");
  const location = document.getElementById("radioLocation");
  let locationValid = false;

  let i = 0;
  while (!locationValid && i < radios.length) {
    if (radios[i].checked) locationValid = true;
    i++;
  }

  if (!locationValid) {
    location.setAttribute("data-error-visible", "true");
    location.setAttribute("data-error", "veuillez choisir une ville!");
  } else {
    location.setAttribute("data-error-visible", "false");
    return locationValid;
  }
};

// Terms of Use Section
const termChecker = () => {
  const term = document.getElementById("checkbox1");
  const use = document.getElementById("useValidate");
  if (term.checked === false) {
    use.setAttribute("data-error-visible", "true");
    use.setAttribute("data-error", "veuillez remplir les termes!");
  } else {
    use.setAttribute("data-error-visible", "false");
  }
};

//*********************************************************************************************************
// Submit Section
//*********************************************************************************************************

// Form Validation
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstNameInput = document.getElementById("firstName");
  const secondNameInput = document.getElementById("secondName");
  const emailInput = document.getElementById("email");
  const birthdateInput = document.getElementById("birthdate");
  const quantityInput = document.getElementById("quantity");
  const locationInput = document.getElementsByName("location");
  const termInput = document.getElementById("checkbox1");

  if (
    firstNameInput.value == "" ||
    secondNameInput.value == "" ||
    emailInput.value == "" ||
    birthdateInput.value == "" ||
    quantityInput.value == "" ||
    locationInput.value == "" ||
    termInput.value == ""
  ) {
    firstNameChecker(firstNameInput.value);
    secondNameChecker(secondNameInput.value);
    emailChecker(emailInput.value);
    birthdateChecker(birthdateInput.value);
    quantityChecker(quantityInput.value);
    locationChecker(locationInput.value);
    termChecker(termInput.value);
    e.preventDefault();
    return false;
  } else {
    formData.style.display = "none";
    confirmForm.style.display = "flex";
    closeValidForm.style.display = "block";
    closeValidForm.addEventListener("click", closeModal);
    return true;
  }
});
