const input = document.getElementById("input");
const passwordRange = document.getElementById("passwordRange");
const showLength = document.getElementById("showLength");

const lc = document.getElementById("lowercase");
const uc = document.getElementById("uppercase");
const n = document.getElementById("numbers");
const s = document.getElementById("symbols");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-={}|[]<>?/";

let allChar = "";

let length = passwordRange.value;
showLength.innerText = length;

function changeLength() {
  length = passwordRange.value;
  showLength.innerText = length;
}

function genPass() {
  let password = "";

  if (lc.checked == true) {
    allChar += lowercase;
  }
  if (uc.checked == true) {
    allChar += uppercase;
  }
  if (n.checked == true) {
    allChar += number;
  }
  if (s.checked == true) {
    allChar += symbol;
  }

  console.log(allChar);

  while (length > password.length) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
  }
  input.value = password;
  allChar = "";
}

function copyPass() {
  input.select();
  document.execCommand("copy");
}
