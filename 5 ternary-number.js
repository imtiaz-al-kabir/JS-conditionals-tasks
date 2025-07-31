/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1 = 20;
let num2 = 30;
let result;
if (num1 > num2) {
  result = num1 * 2;
  console.log(result);
} else {
  result = num1 + num2;
  console.log(result);
}
let num3 = 20;
let num4 = 30;
let result2;
const output = num3 > num4 ? (result2 = num3 * 2) : (result2 = num3 + num4);
console.log(output);
