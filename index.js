console.log("Form Validation Using regular expressions!!");

const Name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submit = document.getElementById("submit");
let validUsername = false;
let validEmail = false;
let validPhone = false;

Name.addEventListener("blur", () => {
  console.log("name is blurred");
  let reg = /^[a-zA-Z]([0-9a-zA-Z]){1,10}$/;
  let str = Name.value;
  // console.log(reg, str);
  if (reg.test(str)) {
    // console.log("Your Username is valid");
    Name.classList.remove("is-invalid");
    validUsername = true;
  } else {
    // console.log("Your Username is not valid");
    Name.classList.add("is-invalid");
    validUsername = false;
  }
});
email.addEventListener("blur", () => {
  // console.log("email is blurred");
  reg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  str = email.value;
  // console.log(reg, str);
  // let result = reg.test(str);
  // console.log("result = ", result);
  if (reg.test(str)) {
    // console.log("Your eamil is valid");
    email.classList.remove("is-invalid");
    validEmail = true;
  } else {
    // console.log("Your eamil is not valid");
    email.classList.add("is-invalid");
    validEmail = false;
  }
});

phone.addEventListener("blur", () => {
  // console.log("phone number is blurred");
  reg = /^([0-9]){10}$/;
  str = phone.value;
  console.log(reg, str);
  if (reg.test(str)) {
    // console.log("Your phone number is valid");
    phone.classList.remove("is-invalid");
    validPhone = true;
  } else {
    // console.log("Your phone number is not valid");
    phone.classList.add("is-invalid");
    validPhone = false;
  }
});

let successFailure = document.getElementById("successFailure");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log("You clicked on submit");
  if (validEmail && validUsername && validPhone) {
    // console.log(
    //   "Username, Phone number, Email of user are valid. Submitting the form."
    // );

    let str1 = `</strong> Your form has been submitted successfully.`;
    successFailure.innerHTML = str1;
    successFailure.classList.add("show");
    successFailure.classList.add("alert-success");
    successFailure.classList.remove("alert-warning");

  } else {
    // console.log(
    //   "One or more out of Username, Phone number, Email of user are  not valid. Hence not submitting the form. Please correct the errors and try again."
    // );
    str1 = `</strong> One or more out of Username, Phone number, Email of user are not valid. Hence not submitting the form. Please correct the errors and try again."`;
    successFailure.innerHTML = str1;
    successFailure.classList.add("show");
    successFailure.classList.remove("alert-success");
    successFailure.classList.add("alert-warning");
  }
});
