let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];   // a list of numbers

replaceOddByEven(list);

function replaceOddByEven(list) {
    for (let i = 0; i < list[i]; i++) {
      let number = list[i];
      if (number % 2 !== 0) {  // Check if the number is odd
        let newNumber = generateRandomPairNumber();  // generates an even random number
        list[i] = newNumber;  // replace the odd number with the random even number
      }
    }
    return list;
  }
  function generateRandomPairNumber() {
    let numberRandom = 14;  // generates a random number between 1 and 100
    if (numberRandom % 2 === 0) {   // check if the number is even
      return numberRandom;
    }
  }
  console.log(list);   // returns the list with the odd numbers replaced by random even numbers
  