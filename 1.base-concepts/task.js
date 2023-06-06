"use strict"
function solveEquation(a, b, c) {
  "use strict";
  let arr = [], x;
  const d = Math.pow(b, 2) - 4 * a * c;
  if (d > 0 ) {
    x = (-b + Math.sqrt(d) )/(2*a);
    arr.push(x);
    x = (b + Math.sqrt(d) )/(2*a);
    arr.push(x);
  } else if (d === 0) {
   x = -b/(2*a);
   arr.push(x);
  } 
  console.log(arr);
  return arr;
}
solveEquation(1, 2, 1)

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}