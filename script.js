const fortune1 =
  "You will find money in your pocket today... but it will only be 5 pesos.";
const fortune2 = "A mysterious stranger will compliment your code.";
const fortune3 =
  "Great success awaits you... right after you finish that JavaScript lesson.";
const fortune4 = "You will become rich someday.";
const fortune5 = "Beware! A bug is hiding in your code.";

const min = 1;
const max = 5;

function getFortune() {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min); // Logic to generate a random number between 1 and 5
  let selectedFortune;
  // Logic to select a fortune based on the random number
  switch (randomNumber) {
    case 1:
      selectedFortune = fortune1;
      break;
    case 2:
      selectedFortune = fortune2;
      break;
    case 3:
      selectedFortune = fortune3;
      break;
    case 4:
      selectedFortune = fortune4;
      break;
    case 5:
      selectedFortune = fortune5;
      break;
  }
  return selectedFortune;
}
console.log(getFortune());
