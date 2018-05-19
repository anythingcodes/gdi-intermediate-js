// Before everything - link to script file before </body>

// 1a - Get filter elements
// skills ==> document & querying children 
//            & getElementById & getElementsByClassName
// optional ==> JSPerf & plural vs. singular
var filterContainer = document.getElementById('portfolio-filters');
var filterEls = filterContainer.getElementsByClassName('portfolio-filter');
var projects = document.getElementsByClassName('project');
  
// 1d - Creating a reusable DRY function
// skills ==> for loops
//            & function params & DRY functions
//            & if statements & getAttribute
//            & efficiency / storing data for use again
//            & === vs. ==
//            & array as param (use for filters and projects)
//            & parseInt or toString() -- you need this?
function toggleActiveClass(id) {
  for (var i = 0; i < projects.length; i++) {
    var currentProjectId = projects[i].getAttribute('data-category');
    if (id === 0) {
      // Show all
      projects[i].classList.add('active');
    } else if (currentProjectId === id.toString()) {
      // Activate this iteration
      projects[i].classList.add('active');
    } else {
      // Deactivate this iteration
      projects[i].classList.remove('active');
    }
    // TODO: try-catch
  }
  return true;
}

// 1b - Loop through elements
// skills ==> for loops
for (var i = 0; i < filterEls.length; i++) {
  // 1c - Add click event to each filter link
  // skills ==> cb function & click event listeners
  //            & passing in array to function
  //            & scoping & IIFE & classList add/remove
  //            & preventDefault & DRY function
  //            & this for target of event
  //            & change event (why use this over 'click')
  (function(i) {
    filterEls[i].addEventListener('change', function(evt) { 
      evt.preventDefault();
      toggleActiveClass(i);
    });
  })(i); 
}

// 2a - Modals when clicked on
// skills ==> data attributes & preventDefault
var modals = document.getElementsByClassName('modal-link');
for (var k = 0; k < modals.length; k++) {
  modals[k].addEventListener('click', function(evt) {
    evt.preventDefault();
    const modalId = this.getAttribute('data-modal');
    // TODO: try-catch for if element exists
    document.getElementById(modalId).classList.add('open');
  });
}

// 2c - Close modals click event
// skills ==> event listener & linking data attributes
//            & preventDefault -- you need this?
//            & querySelector
var closeButtons = document.getElementsByClassName('modal-content__close');
for (var l = 0; l < closeButtons.length; l++) {
  closeButtons[l].addEventListener('click', function(evt) {
    //evt.preventDefault()
    // TODO: try-catch
    document.querySelector('.modal-content.open').classList.remove('open');
  });
}

// 2d - OPTIONAL - Close modals 'esc' event
// skills ==> key listeners

// 3a - Smooth scroll
// skills ==> preventDefault() & conditional for hrefs
//            & window event

// 4a - Get data from API
// TODO

// Optional - Deploying to GitHub
// TODO