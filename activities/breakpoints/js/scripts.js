// Instantiate variables
var myNumber = 20;
var totalFunctionsCalled = 0;

function firstFunction() {
  // Increment (add one to) totalFunctionsCalled
  totalFunctionsCalled++;
  // Call secondFunction
  secondFunction();
}

function secondFunction() {
  // Increment totalFunctionsCalled
  totalFunctionsCalled++;
}

// Call firstFunction to start the chain of events
firstFunction();