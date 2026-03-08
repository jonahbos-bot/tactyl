// main.js — Tactyl.io v3
// Mobile nav toggle
function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close nav when a link is clicked
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.nav-link, .btn-nav-cta');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      var nav = document.getElementById('navLinks');
      if (nav) nav.classList.remove('open');
    });
  });

  // Navbar scroll shadow
  var navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 2px 20px rgba(26,58,92,0.13)';
    } else {
      navbar.style.boxShadow = '0 1px 8px rgba(26,58,92,0.07)';
    }
  });

  // Fade-in on scroll
  var fadeEls = document.querySelectorAll('.fade-in');
  function checkFade() {
    fadeEls.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        el.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', checkFade);
  checkFade();
});

// Use-cases filter
function filterCards(category, btn) {
  // Update active button
  document.querySelectorAll('.filter-tab').forEach(function (b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  // Show/hide cards
  document.querySelectorAll('.use-case-card').forEach(function (card) {
    if (category === 'all') {
      card.classList.remove('hidden');
    } else {
      var cats = card.getAttribute('data-category') || '';
      if (cats.indexOf(category) !== -1) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    }
  });
}
