"use strict";

var hamburgerButton = document.getElementById('hamburger');
var navList = document.getElementById('nav-list');

function toggleButton() {
  navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);