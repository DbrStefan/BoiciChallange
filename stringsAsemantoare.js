//  in HTML  <input type=text>

const checkIfTheyLookAlike = (string1, string2) => {
  if (string1.length === string2.length) {
    for (let i = 0; i <= string1.length; i++) {
      if (string1[i] === string2[i] || string1[i] === string2[i + 1]) {
        console.log(
          `The strings look alike and the second string has one changed element`
        );
      } else {
        console.log(`The strings don't look alike`);
        break;
      }
    }
  } else if (string1.length === string2.length + 1) {
    for (let i = 0; i <= string2.length; i++) {
      if (string1[i] === string2[i] || string1[i] === string2[i + 1]) {
        console.log(
          `The strings look alike and the second string has one substracted element`
        );
      } else {
        console.log(`The strings don't look alike`);
        break;
      }
    }
  } else if (string1.length === string2.length - 1) {
    for (let i = 0; i <= string1.length; i++) {
      if (string1[i] === string2[i] || string1[i] === string2[i + 1]) {
        console.log(
          `The strings look alike and the second string has one added element`
        );
      } else {
        console.log(`The strings don't look alike`);
        break;
      }
    }
  } else {
    console.log(`The strings don't look alike`);
  }
};


checkIfTheyLookAlike('mama', 'mimi');
