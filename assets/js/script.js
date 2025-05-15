"use strict";
let currentMonth = new Date().getMonth() + 1;
let currentYear = Number((new Date().getFullYear() + "").slice(-2));
let validForm = true;
const formEl = document.querySelector(".form"),
  completedEl = document.querySelector(".completed"),
  cardNumberEl = document.querySelector(".card__number"),
  cardNameEl = document.querySelector(".card__name"),
  cardDateEl = document.querySelector(".card__date"),
  cardCodeEl = document.querySelector(".card__code");

const nameCtrl = document.querySelector(".form-control--name"),
  nameIn = document.getElementById("name-input"),
  nameErr = document.getElementById("name-error"),
  numberCtrl = document.querySelector(".form-control--number"),
  numberIn = document.getElementById("number-input"),
  numberErr = document.getElementById("number-error"),
  dateCtrl = document.querySelector(".form-control--date"),
  monthIn = document.getElementById("date-month-input"),
  yearIn = document.getElementById("date-year-input"),
  dateErr = document.getElementById("date-error"),
  cvcCtrl = document.querySelector(".form-control--cvc"),
  cvcIn = document.getElementById("cvc-input"),
  cvcErr = document.getElementById("cvc-error"),
  sumbitBtn = document.querySelector(".btn--form"),
  continueBtn = document.querySelector(".btn--completed");

window.onload = clearInputs;
window.onload = clearCards;


sumbitBtn.addEventListener("click", submitForm);
continueBtn.addEventListener("click", function () {
  switchStates();
  clearCards();
});
nameIn.oninput = function () {
  if (nameIn.value === "") cardNameEl.innerText = "Jane Appleseed";
  else cardNameEl.innerText = nameIn.value;
};
numberIn.oninput = function () {
  if (numberIn.value === "") cardNumberEl.innerText = "0000 0000 0000 0000";
  else {
    numberIn.value = numberIn.value
      .replace(/\s/g, "")
      .match(/(.{1,4})/g)
      .join(" ");
    cardNumberEl.innerText = numberIn.value;
  }
};
monthIn.oninput = function () {
  if (yearIn.value === "" && monthIn.value === "")
    cardDateEl.innerText = "00/00";
  else if (yearIn.value === "") cardDateEl.innerText = `${monthIn.value}/00`;
  else cardDateEl.innerText = `${monthIn.value}/${yearIn.value}`;
};
yearIn.oninput = function () {
  if (yearIn.value === "" && monthIn.value === "")
    cardDateEl.innerText = "00/00";
  else if (monthIn.value === "") cardDateEl.innerText = `00/${yearIn.value}`;
  else cardDateEl.innerText = `${monthIn.value}/${yearIn.value}`;
};
cvcIn.oninput = function () {
  if (cvcIn.value === "") cardCodeEl.innerText = "000";
  else cardCodeEl.innerText = cvcIn.value;
};
function submitForm(e) {
  e.preventDefault();
  validForm = true;
  checkName();
  checkNumber();
  checkDate();
  checkCvc();
  if (validForm) {
    clearInputs();
    switchStates();
    continueBtn.focus();
  }
}
function checkName() {
  if (nameIn.value === "") {
    nameErr.innerText = "Can't be blank";
    nameErr.setAttribute("aria-hidden", false);
    nameCtrl.classList.add("form-control--error");
    validForm = false;
  } else {
    nameErr.innerText = "Error";
    nameErr.setAttribute("aria-hidden", true);
    nameCtrl.classList.remove("form-control--error");
  }
}
function checkNumber() {
  if (numberIn.value === "") {
    numberErr.innerText = "Can't be blank";
    numberErr.setAttribute("aria-hidden", false);
    numberCtrl.classList.add("form-control--error");
    validForm = false;
  } else if (isNaN(numberIn.value.replace(/\s/g, ""))) {
    numberErr.innerText = "Wrong format, numbers only";
    numberErr.setAttribute("aria-hidden", false);
    numberCtrl.classList.add("form-control--error");
    validForm = false;
  } else if (numberIn.value.replace(/\s/g, "").length !== 16) {
    numberErr.innerText = "Must be a 16 digit number";
    numberErr.setAttribute("aria-hidden", false);
    numberCtrl.classList.add("form-control--error");
    validForm = false;
  } else {
    numberErr.innerText = "Error";
    numberErr.setAttribute("aria-hidden", true);
    numberCtrl.classList.remove("form-control--error");
  }
}
function checkDate() {
  monthIn.classList.remove("reset-input-border-color");
  yearIn.classList.remove("reset-input-border-color");
  if (monthIn.value === "" || yearIn.value === "") {
    dateErr.innerText = "Can't be blank";
    dateErr.setAttribute("aria-hidden", false);
    dateCtrl.classList.add("form-control--error");
    validForm = false;
    if (monthIn.value !== "") {
      monthIn.classList.add("reset-input-border-color");
    }
    if (yearIn.value !== "") {
      yearIn.classList.add("reset-input-border-color");
    }
  } else if (isNaN(monthIn.value) || isNaN(yearIn.value)) {
    dateErr.innerText = "Wrong format, numbers only";
    dateErr.setAttribute("aria-hidden", false);
    dateCtrl.classList.add("form-control--error");
    validForm = false;
    if (!isNaN(monthIn.value)) {
      monthIn.classList.add("reset-input-border-color");
    }
    if (!isNaN(yearIn.value)) {
      yearIn.classList.add("reset-input-border-color");
    }
  } else if (
    monthIn.value < 1 ||
    monthIn.value > 12 ||
    monthIn.value.length !== 2 ||
    yearIn.value.length !== 2
  ) {
    dateErr.innerText = "Invalid date (e.g. 01/25)";
    dateErr.setAttribute("aria-hidden", false);
    dateCtrl.classList.add("form-control--error");
    validForm = false;
    if (
      monthIn.value >= 1 &&
      monthIn.value <= 12 &&
      monthIn.value.length === 2
    ) {
      monthIn.classList.add("reset-input-border-color");
    }
    if (yearIn.value.length === 2) {
      yearIn.classList.add("reset-input-border-color");
    }
  } else if (yearIn.value < currentYear) {
    dateErr.innerText = "Must be in the future";
    dateErr.setAttribute("aria-hidden", false);
    dateCtrl.classList.add("form-control--error");
    validForm = false;
  } else if (
    Number(yearIn.value) === currentYear &&
    monthIn.value < currentMonth
  ) {
    dateErr.innerText = "Must be in the future";
    dateErr.setAttribute("aria-hidden", false);
    dateCtrl.classList.add("form-control--error");
    validForm = false;
    yearIn.classList.add("reset-input-border-color");
  } else {
    dateErr.innerText = "Error";
    dateErr.setAttribute("aria-hidden", true);
    dateCtrl.classList.remove("form-control--error");
  }
}
function checkCvc() {
  if (cvcIn.value === "") {
    cvcErr.innerText = "Can't be blank";
    cvcErr.setAttribute("aria-hidden", false);
    cvcCtrl.classList.add("form-control--error");
    validForm = false;
  } else if (isNaN(cvcIn.value)) {
    cvcErr.innerText = "Wrong format, numbers only";
    cvcErr.setAttribute("aria-hidden", false);
    cvcCtrl.classList.add("form-control--error");
    validForm = false;
  } else if (cvcIn.value.length !== 3) {
    cvcErr.innerText = "Must be a 3 digit number";
    cvcErr.setAttribute("aria-hidden", false);
    cvcCtrl.classList.add("form-control--error");
    validForm = false;
  } else {
    cvcErr.innerText = "Error";
    cvcErr.setAttribute("aria-hidden", true);
    cvcCtrl.classList.remove("form-control--error");
  }
}
function clearInputs() {
  nameIn.value = "";
  numberIn.value = "";
  monthIn.value = "";
  yearIn.value = "";
  cvcIn.value = "";
}
function clearCards() {
  cardNameEl.innerText = "Jane Appleseed";
  cardNumberEl.innerText = "0000 0000 0000 0000";
  cardDateEl.innerText = "00/00";
  cardCodeEl.innerText = "000";
}
function switchStates() {
  formEl.classList.toggle("hidden");
  completedEl.classList.toggle("hidden");
}
