const form = document.querySelector("form");
const currentWeight = document.querySelector(".current");
const goalWeight = document.querySelector(".goal");
const losingSpeed = document.querySelector(".speed");

const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");

const table = document.querySelector(".table");
const progressTable = document.querySelector(".progress-table");

let weeks = 0;
const progress = new Map();

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
    progress.set(weeks, current);
  } while (current >= goal);
  return weeks, progress;
};

form.addEventListener("submit", function (x) {
  x.preventDefault();
  calcTime();
  result.classList.toggle("hidden");
  resultText.innerText = `you will need ${weeks} weeks to rech your goal weight of ${goalWeight.value} kg`;
  console.log(progress);
  progress.forEach(function (value, key, map) {
    const html = `
    <tbody>
      <tr>
        <th>${key}</th>
        <th>${value}</th>
        <th>-${currentWeight.value - value}</th>
      </tr>
    </tbody>
  `;
    progressTable.insertAdjacentHTML("beforeend", html);
  });
  table.classList.toggle("hidden");
});
