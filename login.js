const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

// registerLink.addEventListener("click", () => {
//   wrapper.classList.add("active");
// });

// loginLink.addEventListener("click", () => {
//   wrapper.classList.remove("active");
// });

const form = document.querySelector("#myform");
const emailInput = document.querySelector("email");
const passwordInput = document.querySelector("password");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(event.target);
  const name = data.get("email");
  const pass = data.get("password");
  console.log(name);
  console.log(pass);

  // const entries = object.formEntries(data.entries());
  // console.table(entries);
  // const email = emailInput.value;
  // const password = passwordInput.value;

  let isValid = true;

  // Validate email
  if (!email) {
    showError(emailInput, "Email is required");
    isValid = false;
  } else if (!validateEmail(email)) {
    showError(emailInput, "Invalid email format");
    isValid = false;
  } else {
    removeError(emailInput); // Remove error message if email is valid
  }

  // Validate password
  if (!password) {
    showError(passwordInput, "Password is required");
    isValid = false;
  } else if (password.length < 8) {
    showError(passwordInput, "Password must be at least 8 characters long");
    isValid = false;
  } else {
    removeError(passwordInput); // Remove error message if password is valid
  }
  console.log(password);

  if (isValid) {
    // Submit the form or perform other actions
    console.log("Valid login form");
  }
});

// function showError(input, message) {
//   let errorElement = input.parentElement.querySelector(".error-message");
//   if (!errorElement) {
//     errorElement = document.createElement("span");
//     errorElement.className = "error-message";
//     input.parentElement.appendChild(errorElement);
//   }

//   errorElement.textContent = message;
//   input.classList.add("invalid");
// }

// errorElement.textContent = message;
// input.classList.add("invalid");

// function removeError(input) {
//   const errorElement = input.parentElement.querySelector(".error-message");
//   if (errorElement) {
//     errorElement.parentNode.removeChild(errorElement);
//     input.classList.remove("invalid");
//   }
// }
function showError(input, message) {
  let errorElement = input.parentElement.querySelector(".error-message");
  if (!errorElement) {
    errorElement = document.createElement("span");
    errorElement.className = "error-message";
    input.parentElement.appendChild(errorElement);
  }

  errorElement.textContent = message;
  input.classList.add("invalid");
}

function removeError(input) {
  const errorElement = input.parentElement.querySelector(".error-message");
  if (errorElement) {
    errorElement.parentNode.removeChild(errorElement);
    input.classList.remove("invalid");
  }
}

// function validateEmail(email) {
//   const regex = "/^[0-9]{8,}$/";
//   return regex.test(email);
// }
let sections = document.querySelectorAll("section");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};
