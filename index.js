let number1 = new Number();
let number2 = new Number();
let operator = new String();

let btnSelection = document.querySelector(".btn-container");
let userDisplay = document.querySelector(".user-num");
let input = document.createElement("p");

userDisplay.appendChild(input);
const btnClicks = (event) => {
  if (event.target.tagName !== "BUTTON") return;
  let userInput = event.target.value;
  if (!isNaN(userInput)) {
    if (!number1.length) {
      number1 = userInput;
    } else if (!operator) {
      number1 += userInput;
    }
  }
  if (isNaN(userInput)) {
    operator = userInput;
  }
  input.textContent = number1 + operator;
};

btnSelection.addEventListener("click", btnClicks);

const operate = (num1, operator, num2) => {
  const add = (num1, num2) => num1 + num2;
  const substract = (num1, num2) => num1 - num2;
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => num1 / num2;

  switch (operator) {
    case "+":
      return add(num1, num2);

    case "-":
      return substract(num1, num2);

    case "*":
      return multiply(num1, num2);

    case "/":
      return divide(num1, num2);

    default:
      "Error";
      break;
  }
};
