// Functions

// Q1.
const sum = function (a, b) {
  return a + b;
};
sum(5, 10); // => 15

//---//

// Q2.
const average = function (a, b) {
  return (a + b) / 2;
};
average(20, 5); // => 12.5

//---//

// Q3.
function findFactorial(num) {
  let answ = 1;
  for (i = num; i >= 1; i--) {
    answ = answ * i;
  }
  return answ;
}
findFactorial(6); // => 720

//---//

// Q4.
const round = function (number) {
  return Math.round(number);
};
round(1.7); // => 2

//---//

// Q5.
const toThePowerOf = function (base, exponent) {
  return Math.pow(base, exponent);
};
toThePowerOf(9, 2); // => 81

//---//

// Q6.
const randomNumber = function () {
  for (i = 0; i < 1; i++) {
    return Math.random(i);
  }
};
randomNumber(); // => 0.32678224417562673

//---//

// Q7.
const oneOrZero = function (randomNumber) {
  if (randomNumber < 0.5) {
    return 0;
  } else {
    return 1;
  }
};
oneOrZero(); // => 1

//---//

//Q8.
const randomRange = function (number) {
  if (number > 0) {
    return Math.floor(Math.random() * number);
  }
};
randomRange(10); // => 7

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
includeOf("hello", "h"); // => true

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
addToArray(["Hello", "i", "am"], "John"); // => ["Hello", "i", "am", "John"]

//---//

// Q2.
const convertToString = function (array) {
  console.log(array.join(" "));
};
convertToString(["Hello", "i", "am", "John"]); // => "Hello i am John"

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
updateValue([1, 2, 3], 0, 10); // => [10, 2, 3]

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
onlyString(["one", 12, "hi", true, 88, "12"]); // => ["one","hi","12"]

//---//

// Q5.
const users = [
  ["Jane", "123456"],
  ["admin", "abc123"],
];
const login = function (username, password) {
  for (i = 0; i < users.length; i++) {
    if (users[i][0] == username && users[i][1] == password) {
      return "Login Successful";
    }
  }
  return "Login Failed";
};
login("Jane", "123456"); // => "Login Successful"
login("Jane", "5321"); // => "Login Failed"

//---//

// Q6.
const maximumNumber = function (numbers) {
  let maximum = numbers[0];
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
  }
  return maximum;
};

maximumNumber([0, 5, 2, 10, 8, 6]); // => 10

//---//

// Q7.
const reversString = function (string) {
  for (i = 0; i < string.length; i++) {
    splitWord = string.split("");
    reversletters = splitWord.reverse();
    reversWord = reversletters.join("");
    console.log(reversWord);
  }
};
reversString("Hello"); // => "olleH"
