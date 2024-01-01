const yearsElement = document.querySelector(".years");
const daysElement = document.querySelector(".days");
const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");
const heading = document.querySelector("h1");
const counterTimer = document.querySelector(".counterTimer");
const input = document.getElementById("start-time");
const btn = document.querySelectorAll("button");

const second = 1000,
  minute = 60 * second,
  hour = 60 * minute,
  day = 24 * hour,
  year = 365 * day;

const timerFunction = () => {
  let now = new Date();
  let dd = String(now.getDate()).padStart(2, "0"),
    mm = String(now.getMonth() + 1).padStart(2, "0"),
    yyyy = now.getFullYear(),
    hourTime = String(now.getHours()).padStart(2, "0"),
    minuteTime = String(now.getMinutes()).padStart(2, "0"),
    secondsTime = String(now.getSeconds()).padStart(2, "0");

  now = `${mm}/${dd}/${yyyy}/${hourTime}/${minuteTime}/${secondsTime}`;

  // const enteredDay = prompt("Enter Day").padStart(2, "0");
  // const enteredMonth = prompt("Enter Month").padStart(2, "0");
  // const enteredYear = prompt("Enter Year");
  // console.log(`${enteredMonth}/${enteredDay}/${enteredYear}`);

  // let targetDate = `${enteredMonth}/${enteredDay}/${enteredYear}`;
  // if (targetDate < now) {
  //   targetDate = `${enteredMonth}/${enteredDay}/${enteredYear}`;
  // }

  let targetDate = input.value;

  const intervalID = setInterval(() => {
    const timer = new Date(targetDate).getTime();
    const today = new Date().getTime();
    const diff = timer - today;
    const leftYear = Math.floor(diff / year);
    const leftDay = Math.floor((diff % year) / day);
    const leftHour = Math.floor((diff % day) / hour);
    const leftMinute = Math.floor((diff % hour) / minute);
    const leftSecond = Math.floor((diff % minute) / second);

    yearsElement.innerText = leftYear;
    daysElement.innerText = leftDay;
    hoursElement.innerText = leftHour;
    minutesElement.innerText = leftMinute;
    secondsElement.innerText = leftSecond;

    if (diff < 0) {
      counterTimer.style.display = "none";
      heading.innerText = "Time's UP";
      clearInterval(intervalID);
    }

    // console.log(`${leftDay}:${leftHour}:${leftMinute}:${leftSecond}`);
  }, 0);
};

btn[0].addEventListener("click", () => {
  timerFunction();
});
btn[1].addEventListener("click", () => {
  counterTimer.style.display = "none";
  heading.innerText = "Start Again";
  clearInterval(intervalID);
});
btn[2].addEventListener("click", () => {
  location.reload();
});
