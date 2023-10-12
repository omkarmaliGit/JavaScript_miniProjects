const addToList = document.getElementById("addToList");
const date = document.querySelector(".date");
const monthYear = document.querySelector(".monthYear");
const day = document.querySelector(".day");
const addtime = document.querySelector(".addtime");

const input = document.querySelector(".input");
// const task = document.querySelector(".task");
const ulList = document.querySelector(".ulList");

function addTask() {
  if (input.value == "") {
    alert("Please write task before adding.");
  } else {
    const litask = document.createElement("li");

    let liveTime = new Date();

    litask.innerText =
      liveTime.getHours() + ":" + liveTime.getMinutes() + "  -  " + input.value;
    ulList.appendChild(litask);

    // const spani = document.createElement("span");
    // litask.appendChild(spani);

    const xmark = document.createElement("i");
    xmark.setAttribute("class", "fa-regular fa-trash-can");
    litask.appendChild(xmark);
  }
  input.value = "";
  saveData();
}

ulList.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "I") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("listdata", ulList.innerHTML);
}
function showData() {
  ulList.innerHTML = localStorage.getItem("listdata");
}
showData();

function openPopup() {
  addToList.classList.add("openAddToList");
}

function closePopup() {
  addToList.classList.remove("openAddToList");
  addTask();
}

let newDate = new Date();

function updateDate() {
  date.innerText = newDate.getDate();
  monthYear.innerText = getMonthInWord() + " " + newDate.getFullYear();
  day.innerText = getDayInWord();
  setInterval(() => {
    let currentTime = new Date();
    addtime.innerHTML =
      currentTime.getHours() +
      " : " +
      currentTime.getMinutes() +
      " : " +
      currentTime.getSeconds();
  }, 1000);
}
updateDate();

function getMonthInWord() {
  switch (newDate.getMonth()) {
    case 1:
      return "January";
      break;

    case 2:
      return "February";
      break;

    case 3:
      return "March";
      break;

    case 4:
      return "April";
      break;

    case 5:
      return "may";
      break;

    case 6:
      return "June";
      break;

    case 7:
      return "July";
      break;

    case 8:
      return "August";
      break;

    case 9:
      return "September";
      break;

    case 10:
      return "October";
      break;

    case 11:
      return "November";
      break;

    case 12:
      return "December";
      break;

    default:
      return "Not Correct Entry";
      break;
  }
}

function getDayInWord() {
  switch (newDate.getDay()) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 7:
      return "Sunday";
      break;
    default:
      return "Day";
      break;
  }
}
