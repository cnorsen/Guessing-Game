var computernumber=Math.floor((Math.random()*99)+1);
k=0
const r1 = require('readline-sync');
while(true){
  k++
  let num = r1.question("Guess between 1-100: ");
  if (num<computernumber) {console.log("too low")};
  if (num>computernumber) {console.log("too high")};
  if (num==computernumber) {
    console.log("Congratulations! You guessed the correct number!");
    break;
  }}
console.log("It took you "+k+" tries.")
