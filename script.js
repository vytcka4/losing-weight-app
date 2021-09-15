const form = document.querySelector("form");
const currentWeight = document.querySelector(".current");
const goalWeight = document.querySelector(".goal");
const losingSpeed = document.querySelector(".speed");

const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");

const table = document.querySelector(".table");
const progressTable = document.querySelector(".progress-table");

const resetBtn = document.querySelector(".reset");
const submitBtn = document.querySelector(".submit");
let weeks = 0;
const progress = new Map();

// rounding number 0.01

Number.prototype.round = function (places) {
  return +(Math.round(this + "e+" + places) + "e-" + places);
};

// this function calculates how much it takes to lose weight and returns progress data

const calcTime = function () {
  current = currentWeight.value;
  goal = goalWeight.value;
  speed = losingSpeed.value;
  if (current - goal <= 0) {
    return console.log("working");
  }
  do {
    weeks++;
    current = current - (current / 100) * speed;
    progress.set(weeks, current.round(2));
  } while (current >= goal);
  return weeks, progress;
};

form.addEventListener("submit", function (x) {
  x.preventDefault();
  calcTime();
  result.classList.remove("hidden");
  resultText.innerText = `you will need ${weeks} weeks to rech your goal weight of ${goalWeight.value} kg`;
  progress.forEach(function (value, key, map) {
    let html = `
    <tbody>
      <tr>
        <th>${key}</th>
        <th>${value.round(2)}</th>
        <th>-${(currentWeight.value - value).round(2)}</th>
      </tr>
    </tbody>
  `;
    progressTable.insertAdjacentHTML("beforeend", html);
  });
  // if (table.classList.contains("hidden")) {
  //   progressTable.removeAdjacentHTML("beforeend", html);
  // }
  table.classList.remove("hidden");

  currentWeight.value = "";
  goalWeight.value = "";
  losingSpeed.value = "0.5";
  weeks = "";
  progress = "";
  disabled();
});

const disabled = form.addEventListener("click", () => (this.disabled = true));

const reset = () => {
  if (!table.classList.contains("hidden")) {
    table.classList.add("hidden");
    result.classList.add("hidden");
    resultText.innerText = "";
    currentWeight.value = "";
    goalWeight.value = "";
    losingSpeed.value = "0.5";
    progressTable.innerHTML = "";
  }
};

resetBtn.addEventListener("click", reset);
