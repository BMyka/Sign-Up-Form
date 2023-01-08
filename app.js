const password = document.getElementById("password");
const passwordConfirm = document.getElementById("passwordConfirm");
const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")

password.addEventListener("input", function (event) {
  if (password.validity.patternMismatch) {
    password.setCustomValidity("Please include: At least 8 characters, An uppercase letter, a number, and/or a symbol.");
    password.reportValidity();
  } else {
    password.setCustomValidity("");
  }
});

passwordConfirm.addEventListener("input", function (event) {
    if(password.value !== passwordConfirm.value){
        passwordConfirm.setCustomValidity("Passwords do not match.");
        passwordConfirm.reportValidity();
    }
    else {
        passwordConfirm.setCustomValidity("");
    }

  });

  firstName.addEventListener("input", function (event) {
    if (firstName.validity.patternMismatch) {
        firstName.setCustomValidity("No symbols or numbers please!");
        firstName.reportValidity();
    } else {
        firstName.setCustomValidity("");
    }
  });

  lastName.addEventListener("input", function (event) {
    if (lastName.validity.patternMismatch) {
        lastName.setCustomValidity("No symbols or numbers please!");
        lastName.reportValidity();
    } else {
        lastName.setCustomValidity("");
    }
  });