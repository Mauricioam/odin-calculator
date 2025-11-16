let number1 = new Number();
let number2 = new Number();
let operator = new String();

const operate = (operator, number1, number2) => {
  const add = (num1, num2) => num1 + num2;
  const substract = (num1, num2) => num1 - num2;
  const multiply = (num1, num2) => num1 * num2;
  const divide = (num1, num2) => num1 / num2;

  switch (operator) {
    case "+":
      return add(number1, number2);

    case "-":
      return substract(number1, number2);

    case "*":
      return multiply(number1, number2);

    case "/":
      return divide(number1, number2);

    default:
      "Error";
      break;
  }
};
