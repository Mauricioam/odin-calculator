const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

let number1 = new Number();
let number2 = new Number();
let operator = new String();

const operate = (operator, number1, number2) => {
  switch (operator) {
    case "+":
      add(number1, number2);
      break;
    case "-":
      substract(number1, number2);
      break;
    case "*":
      multiply(number1, number2);
      break;
    default:
      break;
  }
};
