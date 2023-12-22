const currentTime = document.querySelector(".current-time");
const currentDate = document.querySelector(".current-date");
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function updateDateTime() {
  setInterval(() => {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const AMPM = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    let dateString = `${daysOfWeek[day]}, ${
      monthsOfYear[month]
    } ${date.getDate()}, ${date.getFullYear()}`;
    let timeString = `${formattedHours}:${padZero(
      minutes
    )}:${date.getSeconds()}${AMPM}`;

    currentDate.textContent = dateString;
    currentTime.textContent = timeString;
  }, 10);
}

function padZero(num) {
  return num < 10 ? `0${num}` : num;
}

updateDateTime();
