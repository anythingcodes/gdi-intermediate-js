/*
 * Open your browser's console and click each
 * of the buttons below. Notice how each
 * button click outputs 3 instead of that
 * button's number. Instead, clicking
 * each button should log its number (e.g.
 * clicking 'Button 0' should log 0 in the
 * console).
 */

var buttons = document.getElementsByTagName('button');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    console.log(i);
  });
}

/*
 * HINT: Think about the variable that is
 * not changing. Could this be fixed by
 * properly scoping it?
*/