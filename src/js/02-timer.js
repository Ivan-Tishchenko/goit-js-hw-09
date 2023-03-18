import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";




const input = document.querySelector("#datetime-picker");
const btnStart = document.querySelector("[data-start]");
btnStart.setAttribute("disabled", "");
const cellsForValues = document.querySelectorAll(".value");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        
        reviewDate(selectedDates);
    },
};
let calendar = flatpickr(input, options);
let ms;
let interval = null;

function reviewDate(choseDate) {
    const thisDate = new Date(choseDate[0]).getTime();
    const today = new Date().getTime();

    if (thisDate > today) {
        btnStart.removeAttribute("disabled");
        btnStart.addEventListener("click", startTimer);
        ms = new Date(choseDate[0]).getTime();
        return;
    }
    window.alert("Please choose a date in the future");
}


function startTimer() {
    btnStart.setAttribute("disabled", "");
    interval = setInterval(() => {
        const objData = convertMs(ms - new Date().getTime());
        ms -= 1000;
        if (ms <= 0) {
            clearInterval(interval);
        }

        cellsForValues[0].textContent = addLeadingZero(objData.days);
        cellsForValues[1].textContent = addLeadingZero(objData.hours);
        cellsForValues[2].textContent = addLeadingZero(objData.minutes);
        cellsForValues[3].textContent = addLeadingZero(objData.seconds);
    }, 1000)
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {

    return value.toString().padStart(2, "0");
}