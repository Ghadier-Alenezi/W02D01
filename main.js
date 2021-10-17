// Functions

// Q1.
const sum = function (a, b) {
  return a + b;
};
//---//
// Q2.
const average = function (a, b) {
  return (a + b) / 2;
};
//---//
// Q3.
function factorialize(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorialize(num - 1);
  }
};
//---//
// Q4.
const round = function (number) {
  return Math.round(number);
};
//---//
// Q5.
const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};
//---//
// Q6.
const randomNumber = function () {
  for (i = 0; i < 1; i++) {
    return Math.random(i);
  }
};
//---//
// Q7.
const oneOrZero = function (randomNumber) {
  if (randomNumber < 0.5) {
    return 0;
  } else {
    return 1;
  }
};
//---//
//Q8.
const randomRange = function (number) {
  if (number > 0) {
    return Math.floor(Math.random() * number);
  }
};
//---//
// Q9.
const includeOf = function (string, character) {
  for (i = 0; i < string.length; i++) {
    if (character === string[i]) {
      return true;
    } else {
      return false;
    }
  }
};
//---//
/*
note : first tray to solve it using for loop then Look 
up the following on MDN indexOf() or includes() and 
solve it without iteration
*/

// Array

// Q1.

const addToArray = function (array, string) {
  array.push(string);
  return array;
};
//---//

// Q2.
const convertToString = function (array) {
  console.log(array.join(" "));
};

//---//

// Q3.
const updateValue = function (array, index, value) {
  if (index < array.length) {
    array.splice(index, 1, value);
    console.log(array);
  } else {
    console.log("there is no element to updated in this index");
  }
};
//---///

// Q4.
const onlyString = function (array) {
  let newArr = [];
  for (i = 0; i < array.length; i++) {
    if (typeof array[i] == "string") {
      newArr.push(array[i]);
    }
  }
  return newArr;
};
//---//
// Q5.
const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];
const login = function (username, password) {
  for (i = 0; i < users.length; i++) {
    if ((users[i] == [username, password])) {
      console.log("Login Successful");
    } else {
      console.log("Login Failed");
    }
  }
};
//---//

// Q6.
const maximumNumber = function (numbers) {};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10
//---//

// Q7.
const reversString = function (string) {
    for(i=0; i<string.length; i++){
        splitWo = string.split('');
        reversWo = splitWo.reverse();
        lastWo = reversWo.join('');
        console.log(lastWo);
    }
};