var buttons = document.getElementsByTagName('button');

for(var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		console.log(i);
	});
}

/*
	HINT: Think about the variable that is
	not changing. Could this be fixed by
	properly block-scoping it?
*/

