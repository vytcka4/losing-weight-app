const form = document.querySelector("form");
const currentWeight = document.querySelector(".current");
const goalWeight = document.querySelector(".goal");
const losingSpeed = document.querySelector(".speed");

const calcTime = function () {
  current = currentWeight.value;
  goal = goalWeight.value;
  speed = losingSpeed.value;
  let days = 0;
  let weeks = 0;
  do {
    current = current - ((goal / 100) * speed) / 7;
    days++;
    if (days === 7) {
      weeks++;
      days = days - 7;
    }
  } while (current >= goal);
  console.log(`${weeks} ${days}`);
};

form.addEventListener("submit", function (x) {
  x.preventDefault();
  calcTime();
});
