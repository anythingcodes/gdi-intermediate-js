// Define an object with various properties.
var myObject = {
  number: 3.14159,
  warnMe: function() {
      return 'warning message'
  },
  error: { message: 'error message' },
  arr: [
      {'name': 'Jimmy', 'age': 6},
      {'name': 'June', 'age': 5},
      {'name': 'Jean', 'age': 8}
  ]
};

// Show different console methods and how to use object properties.

// Several console log statements
console.log(myObject);
console.log(myObject.number);
console.log(myObject.arr);

// Console warning statement
console.warn(myObject.warnMe());

// Console error statement
console.error(myObject.error.message);

// Console table statement
console.table(myObject.arr);
