/*
 * We've wrapped our code in a closure to move it from the global scope.
 * This is a best practice because it makes it easier for us to
 * monitor changes and prevents our variables from being overwritten :)
 */

(function () {
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

})();

