document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
          const offsetTop = targetElement.offsetTop;
          const windowHeight = window.innerHeight;
          const scrollTo = offsetTop - (windowHeight / 2) + (targetElement.offsetHeight / 2);
          window.scrollTo({ top: scrollTo, behavior: 'smooth' });
      }
  });
});


 // Function to check scroll position and toggle button visibility
 window.onscroll = function() {
  toggleGoToTopButton();
};


function toggleGoToTopButton() {
  var button = document.getElementById("goToTopBtn");
  // If the user has scrolled down, show the button; otherwise, hide it
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      button.style.display = "block";
  } else {
      button.style.display = "none";
  }
}


// Function to scroll to the top of the page
function goToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Function from typejs
var typed = new Typed('#element', {
  strings: ['Student', 'Web-Developer', 'ML-Enthusiast','Tech-curious','Passionate'],
  typeSpeed: 50,
  backSpeed: 20,
  backDelay: 900,
  loop: true,
});


// Function for hamburger menu
let menu_icon = document.querySelector('.menu-icon-div');
let navbar = document.querySelector('.navbar');

if(menu_icon)
{
  menu_icon.addEventListener('click', function(){
    menu_icon.classList.toggle('open');
      navbar.classList.toggle('open');
  });
}


// Function to hide navbar when clicking on navbar items
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
      menu_icon.classList.remove('open');
      navbar.classList.remove('open');
  });
});


// Function to change mode

let mode_div = document.querySelector(".mode-change");
let mode = document.querySelector("#mode");

// Function to set the mode in localStorage
function setMode(mode) {
  localStorage.setItem('mode', mode);
}

// Function to retrieve the mode from localStorage
function getMode() {
  return localStorage.getItem('mode');
}

// Function to apply mode based on stored mode
function applyMode() {
  let storedMode = getMode();
  if (storedMode === 'dark') {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

// Function to enable dark mode
function enableDarkMode() {
  mode.classList.remove("bx-sun");
  mode.classList.add("bx-moon");
  document.documentElement.style.setProperty('--primary-color', '#ffffff');
  document.documentElement.style.setProperty('--secondary-color', '#FFFF00');
  document.documentElement.style.setProperty('--primary-bg-color', '#050505');
  document.documentElement.style.setProperty('--secondary-bg-color', '#101015');
  document.documentElement.style.setProperty('--gradient-color-1', '#ffff00');
  document.documentElement.style.setProperty('--gradient-color-2', '#FFD700');
  setMode('dark'); // Store the mode
}

// Function to enable light mode
function enableLightMode() {
  mode.classList.remove("bx-moon");
  mode.classList.add("bx-sun");
  document.documentElement.style.setProperty('--primary-color', '#000000');
  document.documentElement.style.setProperty('--secondary-color', '#007bff');
  document.documentElement.style.setProperty('--primary-bg-color', '#f8f9fa');
  document.documentElement.style.setProperty('--secondary-bg-color', '#e9ecef');
  document.documentElement.style.setProperty('--gradient-color-1', '#28a745');
  document.documentElement.style.setProperty('--gradient-color-2', '#FFD700');
  setMode('light'); // Store the mode
}

// Event listener for mode changer
mode_div.addEventListener('click', function () {
  if (mode.classList.contains("bx-sun")) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
});

// Apply mode on page load
applyMode();

