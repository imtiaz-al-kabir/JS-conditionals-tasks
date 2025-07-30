/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
let result = 79;
if (result >= 90 && result <= 100) {
  console.log("You Got : A");
} else if (result >= 80 && result < 90) {
  console.log("You Got : B");
} else if (result >= 70 && result < 80) {
  console.log("You Got : C");
} else if (result >= 60 && result < 70) {
  console.log("You Got : D");
} else console.log("You Got : F");
