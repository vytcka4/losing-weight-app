const form = document.querySelector("form");
const currentWeight = document.querySelector(".current");
const goalWeight = document.querySelector(".goal");
const losingSpeed = document.querySelector(".speed");
const result = document.querySelector(".result");
const resultText = document.querySelector(".result-text");
let days = 0;
let weeks = 0;

const calcTime = function () {
  current = currentWeight.value;
  goal = goalWeight.value;
  speed = losingSpeed.value;
  do {
    current = current - ((goal / 100) * speed) / 7;
    days++;
    if (days === 7) {
      weeks++;
      days = days - 7;
    }
  } while (current >= goal);
  return days, weeks;
};

form.addEventListener("submit", function (x) {
  x.preventDefault();
  calcTime();
  result.classList.toggle("hidden");
  resultText.innerText = `you will need ${weeks} weeks and ${days} days to rech your goal weight of ${goalWeight.value} kg`;
});
