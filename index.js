let count = 0;
let countEl = document.getElementById("count-el");


const increment = () => {
  count += 1;
  countEl.innerText = count;
};


const decrement = () => {
  count -= 1;
  countEl.innerText = count;
};


let saveEl = document.getElementById("save-el");


const save = () => {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
};
