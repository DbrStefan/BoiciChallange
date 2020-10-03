const sumDigits = n => {
  numberToString = `${n}`;
  let sum = 0;
  let array = numberToString.split('')
  const index = array.indexOf('.');
  if (index > -1) {
    array.splice(index, 1);
  }
  array = array.map(Number);
  array.forEach(element => {
    sum += element;
  });
  console.log(array);
  console.log(sum);
};

sumDigits(2220.13337);

