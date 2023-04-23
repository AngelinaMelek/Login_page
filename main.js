const dots = document.querySelector(".dots");
const step_text = document.querySelector("#step_text");
const step_div = document.querySelector("#step_div");
const next_btn = document.querySelector(".log_in_container__boxes--button");
const prev_btn = document.querySelector(".log_in_container__boxes--arrow");
const options = document.querySelector("#options");
const ages = document.querySelector("#ages");
const locat = document.querySelector("#location");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const pass_text = document.querySelector(".log_in_container__boxes--text");
const log_in = document.querySelector(".form__button");
const forgot_pass = document.querySelector(".form__link");

const text = [
  "Who are you?",
  "What is your age?",
  "I am from",
  "Your email adress",
  "Create your password",
];

const jobs = ["Engineer", "QA", "DevOps", "Other"];
const fields = [options, ages, locat, email, password];
step_text.innerText = "Who are you?";

let counter = 0;
generateJobs();

next_btn.onclick = function changeStepText() {
  if (counter < text.length - 1) counter++;
  step_text.innerText = text[counter];
  shownOptions();
};

prev_btn.onclick = function minusStepText() {
  if (counter > 0) counter--;
  step_text.innerText = text[counter];
  shownOptions();
};

function shownOptions() {
  if (counter == 0) generateJobs();
  if (counter == 1) generateAges();
  if (counter == 2) locatInput();
  if (counter == 3) emailIntut();
  if (counter == 4) passwordInput();
}

function generateAges() {
  activeDisplay(ages);

  if (options.options.length < 33) {
    for (let i = 17; i <= 50; i++) {
      let option = document.createElement("option");
      option.setAttribute("value", i);
      let optionText = document.createTextNode(i);
      option.appendChild(optionText);
      ages.appendChild(option);
    }
  }
}

function generateJobs() {
  activeDisplay(options);

  if (options.options.length < jobs.length) {
    for (let key of jobs) {
      let optionNew = document.createElement("option");
      optionNew.setAttribute("value", jobs[key]);
      let optionText = document.createTextNode(key);
      optionNew.appendChild(optionText);
      options.appendChild(optionNew);
    }
  }
}

function locatInput() {
  activeDisplay(locat);
}

function emailIntut() {
  activeDisplay(email);
}

function passwordInput() {
  activeDisplay(password);
}

function activeDisplay(name) {
  name.style.display = "block";

  for (let i = 0; i < fields.length; i++)
    if (fields[i] !== name) {
      fields[i].style.display = "none";
    }

  if (name === password) {
    pass_text.style.visibility = "visible";
    next_btn.style.backgroundColor = "#45bf4a";
    next_btn.innerText = "Start Now  ✔";
  } else {
    pass_text.style.visibility = "hidden";
    next_btn.style.backgroundColor = "#5866ea";
    next_btn.innerText = "Next Step  ❯";
  }
}

function dropDownBuilder() {
  var mylist = document.getElementById("jobs");
  document.getElementById("favourite").value =
    mylist.options[mylist.selectedIndex].text;
}

function dotBuilder() {
  for (let i = 0; i < 5; i++) {
    const dot = document.createElement("dot");
    dot.style.background = "#bbb";
    dot.style.borderRadius = "50%";
    dot.style.display = "inline-block";
    dot.style.margin = "0 8px";
    dot.style.width = "10px";
    dot.style.height = "10px";
    dots.appendChild(dot);
  }
}
dotBuilder();

log_in.onclick = () => {
  alert("In Progress " + "☻");
};

forgot_pass.onclick = () => {
  alert("I always have the same problem " + "♕");
};
