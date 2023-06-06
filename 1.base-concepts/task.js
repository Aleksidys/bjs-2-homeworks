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

function calculateTotalMortgage(percent, contribution, amount, countMonths) //процент (в диапазоне от 0 до 100), начальный взнос, сумма кредита, срок в месяцах 
{
	const P = percent / 100 / 12;
	const S = amount - contribution;
	const n = countMonths;
	const monthlyPayment = S * (P + P / (Math.pow(1 + P, n) - 1));
	const totalAmount = (monthlyPayment * n).toFixed(2);
	console.log(totalAmount)
	return totalAmount;
}
calculateTotalMortgage(10, 0, 50000, 12)