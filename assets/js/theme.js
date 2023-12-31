/* Function for getting the current year in the footer */
;(function () {
  if (document.getElementById('get-current-year')) {
    document.getElementById('get-current-year').innerHTML =
      new Date().getFullYear()
  }
})()

/* Function for opning navbar on mobile */
function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle('hidden')
  document.getElementById(collapseID).classList.toggle('block')
}
/* Function for dropdowns */
function openDropdown(event, dropdownID) {
  let element = event.target
  while (element.nodeName !== 'A') {
    element = element.parentNode
  }
  document.getElementById(dropdownID).classList.toggle('hidden')
  document.getElementById(dropdownID).classList.toggle('block')
}

/* Function for show/hide table of content */
function toggleTOC() {
  var toc = document.getElementById('toc')
  if (toc.style.display == 'block') {
    // if toc hidden, display it
    toc.style.display = 'none'
  } else {
    // if toc displayed, hidden it
    toc.style.display = 'block'
  }
}
