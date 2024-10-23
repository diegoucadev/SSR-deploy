const personalDataForm = document.querySelector("#personal-data-form");
const nameField = document.querySelector("#name");
const ageField = document.querySelector("#age");
const emailField = document.querySelector("#email");

personalDataForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //Field validations
  let err = [];
  if (!isValidName(nameField.value.trim())) {
    err.push("Ingrese un nombre valido");
  }
  if (!isValidAge(ageField.value)) {
    err.push("Edad invalida o menor a la minima");
  }
  if (!isValidEmail(emailField.value.trim())) {
    err.push("Ingrese una direccion de correo valida");
  }
  //submit if there are no errors
  if (err.length > 0) {
    let errString = "";
    for (const error of err) {
      errString += error + "\n";
    }
    alert(errString);
  } else {
    personalDataForm.submit();
  }
});

const isValidName = (name) => {
  if (name.length < 2) {
    return false;
  }
  return true;
};

const isValidAge = (age) => {
  if (age < 13 || age > 100) {
    return false;
  }
  return true;
};

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
