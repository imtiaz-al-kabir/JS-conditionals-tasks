/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 20;
isStudent = true;
const regularFare = 800;
let fare;

if (age < 10) {
  console.log("Free Ticket for Children");
}
if (isStudent) {
  fare = regularFare * 0.5;
  console.log(fare);
}
if (age >= 60) {
  fare = regularFare * 0.15;
  console.log(fare);
} else {
  console.log("Regular ticket fare 800 tk");
}
