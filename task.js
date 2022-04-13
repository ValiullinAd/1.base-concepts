"use strict";
function solveEquation(a, b, c) {
  let arr;
  let D = (b * b)- 4 * a * c;
  if (D < 0) {
    arr = [];
  }
  if (D === 0) {
    let x = -b / (2 * a);
    arr = [x];
  }
  if (D > 0) {
    let x1 = (-b + Math.sqrt ((b * b)- 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt ((b * b)- 4 * a * c)) / (2 * a);
    arr = [x1,x2];
  }

  // код для задачи №1 писать здесь
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
