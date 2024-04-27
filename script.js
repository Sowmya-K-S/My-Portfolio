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
let menu_icon = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu_icon.addEventListener('click', function(){
  menu_icon.classList.toggle('open');
    navbar.classList.toggle('open');
});

// Function to hide navbar when clicking on navbar items
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', function() {
      menu_icon.classList.remove('open');
      navbar.classList.remove('open');
  });
});