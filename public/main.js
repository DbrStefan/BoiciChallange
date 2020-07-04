let firstUserInput = '';
let secondUserInput = [];
let thirdUserInput = 0;

let firstSubmitButton = document.getElementById('1stSubmitButton');
let secondSubmitButton = document.getElementById('2ndSubmitButton');
let thirdSubmitButton = document.getElementById('3rdSubmitButton');

let firstResult = document.getElementById('result1');
let secondResult = document.getElementById('result2');


firstSubmitButton.addEventListener('click', () => {
  firstUserInput = document.getElementById('1stUserInput').value;
  mostRepetedCharacter(firstUserInput);
});

secondSubmitButton.addEventListener('click', () => {
  secondUserInput.push(document.getElementById('2ndUserInput').value);
  console.log(secondUserInput);
});

thirdSubmitButton.addEventListener('click', () => {
  thirdUserInput = document.getElementById('3rdUserInput').value;
  sumOfBiggestNumbers(secondUserInput, thirdUserInput);
});

const mostRepetedCharacter = (string) => {
  let counter = 1;
  let arrOfArr = [];
  const arrayIneed = string.split('');
  arrayIneed.sort();
  for (let i = 0; i < arrayIneed.length; i++) {
    if (arrayIneed[i] === arrayIneed[i + 1]) {
      counter++;
    } else {
      arrOfArr.push([counter, arrayIneed[i]]);
      counter = 1;
    }
  }
  arrOfArr.sort((a, b) => b - a);
  firstResult.append(arrOfArr[0][1]);
};

const sumOfBiggestNumbers = (array, nr) => {
  let sum = 0;
  secondResult.append(`Your numbers are ${secondUserInput}!`);
  let sortedArray = array.sort((a, b) => b - a);
  console.log(sortedArray);
  for (let i = 0; i < nr; i++) {
    sum += parseInt(sortedArray[i]);
  }
  console.log(sum);
  console.log(typeof sum);
  
  secondResult.append(`\nThe sum is ${sum}!`);
};
