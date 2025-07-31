/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
let score = 80;
let fScore = 39;

if (score >= 80) {
  if (fScore >= 80) {
    console.log("Lets go for a lunch");
  } else if (fScore < 80 && fScore >= 60) {
    console.log("good luck next time");
  } else if (fScore < 60 && fScore >= 40) {
    console.log("message unseen");
  } else {
    console.log("Block");
  }
} else {
  console.log("go to home and sleep and act sad");
}
