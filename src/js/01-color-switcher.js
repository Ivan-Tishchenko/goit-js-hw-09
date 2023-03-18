function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
    btnStart: document.querySelector("[data-start]"),
    btnStop: document.querySelector("[data-stop]"),
    body: document.querySelector("body"),
}
let isActive = false;

refs.btnStart.addEventListener("click", rundomBackgraund);
refs.btnStop.addEventListener("click", rundomBackgraund);
let setBackgraund = null;

function rundomBackgraund() {
    if (!isActive) {
        refs.body.style.backgroundColor = getRandomHexColor();
        setBackgraund = setInterval(getColor, 1000);
        refs.btnStart.setAttribute("disabled", "");
        refs.btnStop.removeAttribute("disabled");
        isActive = true;
        return;
    }
    refs.btnStart.removeAttribute("disabled");
    clearInterval(setBackgraund);
    refs.btnStop.setAttribute("disabled", "");
    isActive = false
}

function getColor() {
    refs.body.style.backgroundColor = getRandomHexColor();
}
