import Notiflix from "notiflix";

function createPromise(position, delay) {
  const promis =new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({
        position,
        delay,
      })
    } else {
      reject({
        position,
        delay,
      })
    }
  });
  return promis;
}

const form = document.querySelector("form");
let interval = null;

form.addEventListener("submit", startGeneratPromis);

function startGeneratPromis(e) {
  e.preventDefault(); 

  let inputDelay = Number.parseFloat(document.querySelector("[name=delay]").value);
  let inputStep = Number.parseFloat(document.querySelector("[name=step]").value);
  let inputAmount = Number.parseFloat(document.querySelector("[name=amount]").value);
  let i = 1;

  interval = setInterval(() => {
    createPromise(i, inputDelay).then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }).catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    i += 1;
    inputDelay += inputStep;

    if (i > inputAmount) {
      clearInterval(interval);
    }

  }, inputStep)
}



