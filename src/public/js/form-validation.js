const personalDataForm = document.querySelector("#personal-data-form");
const nameField = document.querySelector("#name");
const ageField = document.querySelector("#age");
const emailField = document.querySelector("#email");

personalDataForm.addEventListener("submit", (e) => {
  e.preventDefault();

  clearErrors();

  // Field validations
  let hasError = false;
  if (!isValidName(nameField.value.trim())) {
    showError(nameField, "Ingrese un nombre valido");
    hasError = true;
  }
  if (!isValidAge(ageField.value)) {
    showError(ageField, "Edad invalida o menor a la minima");
    hasError = true;
  }
  if (!isValidEmail(emailField.value.trim())) {
    showError(emailField, "Ingrese una direccion de correo valida");
    hasError = true;
  }

  // Submit if there are no errors
  if (!hasError) {
    personalDataForm.submit();
  }
});

const clearErrors = () => {
  document.querySelectorAll(".text-red-500").forEach((errorElement) => {
    errorElement.classList.add("hidden");
    errorElement.textContent = "";
  });

  // Remove red border from all fields
  nameField.classList.remove("border-red-500");
  ageField.classList.remove("border-red-500");
  emailField.classList.remove("border-red-500");
};

const showError = (field, message) => {
  const errorElement = document.querySelector(`#${field.id}-error`);
  errorElement.textContent = message;
  errorElement.classList.remove("hidden");
  field.classList.add("border-red-500");
};

const isValidName = (name) => {
  return name.length >= 2;
};

const isValidAge = (age) => {
  return age >= 13 && age <= 100;
};

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
