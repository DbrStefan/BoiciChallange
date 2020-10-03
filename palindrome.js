// const firstHalfArray = [];
// const secondHalfArray = [];

// const sortPalindrome = n => {
//   numberToString = `${n}`;

//   let array = numberToString.split('');
//   const index = array.indexOf('.');
//   if (index > -1) {
//     array.splice(index, 1);
//   }
//   array = array.map(Number);
//   for (el of array){
//       if (array.find((el)=>{})){
//           firstHalfArray.push(el);
//           // secondHalfArray.push(el2?);
//       }
//   }

//   console.log(array);
//   console.log(firstHalfArray);
//   console.log(secondHalfArray);
// };

// sortPalindrome(232334.55543);

const checkIfPalindrome = n => {
  let finalArray = [];
  if (typeof n === 'string') {
    finalArray = n.split('');
  } else {
    let nIsString = `${n}`;
    finalArray = nIsString.split('');
  }
  const arrayCopy = finalArray.map(function(num) {
    return num;
  });
  const arrayReverse = finalArray.reverse();
  for (let i = 0; i < finalArray.length; i++) {
    if (arrayCopy[i] === arrayReverse[i]) {
      console.log('Este');
    } else {
      console.log('Nu este');
    }
  }

  console.log(finalArray);
  console.log(arrayCopy);
  console.log(arrayReverse);
};

checkIfPalindrome(1223221);
