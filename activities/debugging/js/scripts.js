// Instantiate variables
var myNumber = 20;
var totalFunctionsCalled = 0;
var myArray = ['Ada', 'Aja'];

function firstFunction() {
  // Increment (add one to) totalFunctionsCalled
  totalFunctionsCalled++;
  // Push 'Hannah' onto array
  myArray.push('Hannah');
  // Call secondFunction
  secondFunction();
}

function secondFunction() {
  // Increment totalFunctionsCalled
  totalFunctionsCalled++;
  // Push 'Bob' onto array
  myArray.push('Bob');
}

// Call firstFunction to start the chain of events
firstFunction();