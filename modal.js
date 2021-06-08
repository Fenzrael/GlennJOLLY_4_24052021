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
      case "birthdate":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;
      default:
        nul;
    }
  });
});

const firstNameChecker = (value) => {
  const firstName = document.getElementById("firstName");
  const formulaire = document.getElementById("form1");
  if (value.length < 2 || value.length === 0) {
    firstName.setAttribute("minlength", 2);
    firstName.setAttribute("required", "");
    formulaire.setAttribute("data-error-visible", "true");
    formulaire.setAttribute(
      "data-error",
      "veuillez tapez plus que 2 caractères!"
    );
  } else {
    formulaire.setAttribute("data-error-visible", "false");
  }
};

const secondNameChecker = (value) => {
  const secondName = document.getElementById("secondName");
  const formulaire = document.getElementById("form2");
  if (value.length < 2 || value.length === 0) {
    secondName.setAttribute("minlength", 2);
    secondName.setAttribute("required", "");
    formulaire.setAttribute("data-error-visible", "true");
    formulaire.setAttribute(
      "data-error",
      "veuillez tapez plus que 2 caractères!"
    );
  } else {
    formulaire.setAttribute("data-error-visible", "false");
  }
};

const emailChecker = (value) => {
  const email = document.getElementById("email");
  const formulaire = document.getElementById("form3");

  if (value.length < 1 || !value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    email.setAttribute("minlength", 1);
    email.setAttribute("required", "");
    formulaire.setAttribute("data-error-visible", "true");
    formulaire.setAttribute("data-error", "Entrez une adresse Mail Valide!");
  } else {
    formulaire.setAttribute("data-error-visible", "false");
  }
};
