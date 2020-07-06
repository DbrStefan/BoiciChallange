let userInput = [
  19,
  10,
  16,
  1,
  7,
  2,
  16,
  13,
  20,
  12,
  8,
  4,
  10,
  11,
  15,
  17,
  2,
  18,
  13,
  9,
];

const getResult = (array) => {
  array.sort((a, b) => {
    return b.length - a.length;
  });
  console.log(array[(0, 0)]);
};

const getLongestGrowingSubArray = (array) => {
  let arrOfArr = [];
  for (let i = 0; i < array.length; i++) {
    let comparingVariable = array[i];

    for (let jj = 1; jj < array.length; jj++) {
      let insideArray = [];
      insideArray.push(array[i]);
      for (let j = i + jj; j < array.length; j++) {
        if (comparingVariable < array[j]) {
          insideArray.push(array[j]);
          comparingVariable = array[j];
        }
      }
      comparingVariable = array[i];
      arrOfArr.push(insideArray);
    }
  }

  getResult(arrOfArr);
};

getLongestGrowingSubArray(userInput);
