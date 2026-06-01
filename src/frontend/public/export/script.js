// ============================================================
//  SAIF SURGICAL & SCIENTIFIC EQUIPMENT — script.js
// ============================================================

(function () {
  'use strict';

  // ---- Page list ----
  var pages = ['home', 'about', 'products', 'blog', 'contact', 'get-quote', 'quote-submitted'];

  // ---- Read page name from URL hash ----
  function getPageFromHash() {
    var hash = window.location.hash.replace('#', '').trim();
    if (!hash || hash === '/' || hash === '') return 'home';
    return pages.indexOf(hash) !== -1 ? hash : 'home';
  }

  // ---- Show a page, hide all others ----
  function showPage(name) {
    pages.forEach(function (p) {
      var el = document.getElementById('page-' + p);
      if (el) el.classList.add('hidden');
    });
    var target = document.getElementById('page-' + name);
    if (target) {
      target.classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    updateActiveNav(name);
    closeMobileMenu();
  }

  // ---- Highlight active nav link ----
  function updateActiveNav(name) {
    document.querySelectorAll('.nav-link').forEach(function (a) {
      if (a.getAttribute('data-page') === name) {
        a.classList.add('active');
      } else {
        a.classList.remove('active');
      }
    });
  }

  // ---- Navigation click delegation ----
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('.nav-trigger');
    if (trigger) {
      var page = trigger.getAttribute('data-page');
      if (page) {
        e.preventDefault();
        window.location.hash = '#' + page;
        showPage(page);
      }
    }
  });

  // ---- Handle direct hash navigation (back/forward) ----
  window.addEventListener('hashchange', function () {
    showPage(getPageFromHash());
  });

  // ---- Mobile Menu Toggle ----
  var menuToggle = document.getElementById('menu-toggle');
  var mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
      } else {
        mobileMenu.classList.remove('hidden');
      }
    });
  }

  function closeMobileMenu() {
    if (mobileMenu) mobileMenu.classList.add('hidden');
  }

  // ---- Sticky Header Shadow on Scroll ----
  var header = document.getElementById('site-header');
  window.addEventListener('scroll', function () {
    if (header) {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 2px 16px rgba(0,0,0,0.12)';
      } else {
        header.style.boxShadow = '0 1px 8px rgba(0,0,0,0.08)';
      }
    }
  });

  // ---- Contact Form — sends via WhatsApp ----
  var contactForm = document.getElementById('contact-form');
  var contactSuccess = document.getElementById('contact-success');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name  = (document.getElementById('c-name').value || '').trim();
      var phone = (document.getElementById('c-phone').value || '').trim();
      var email = (document.getElementById('c-email').value || '').trim();
      var req   = (document.getElementById('c-req').value || '').trim();

      var text =
        'Hello Saif Surgical! I have an enquiry:\n\n' +
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        (email ? 'Email: ' + email + '\n' : '') +
        'Requirement: ' + req;

      var encoded = encodeURIComponent(text);
      window.open('https://wa.me/919898056315?text=' + encoded, '_blank');

      contactForm.reset();
      if (contactSuccess) {
        contactSuccess.classList.remove('hidden');
        setTimeout(function () {
          contactSuccess.classList.add('hidden');
        }, 5000);
      }
    });
  }

  // ---- Quote Form — sends to WhatsApp ----
  var quoteForm = document.getElementById('quote-form');

  if (quoteForm) {
    quoteForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name    = (document.getElementById('q-name').value || '').trim();
      var phone   = (document.getElementById('q-phone').value || '').trim();
      var product = (document.getElementById('q-product').value || '').trim();
      var qty     = (document.getElementById('q-qty').value || '').trim();
      var message = (document.getElementById('q-msg').value || '').trim();

      var text =
        'Hello, I would like to request a quote:\n\n' +
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Requirement: ' + product + '\n' +
        'Quantity: ' + (qty || 'Not specified') + '\n' +
        'Message: ' + (message || 'N/A');

      var encoded = encodeURIComponent(text);
      window.open('https://wa.me/919898056315?text=' + encoded, '_blank');

      quoteForm.reset();
      window.location.hash = '#quote-submitted';
      showPage('quote-submitted');
    });
  }

  // ---- Initialise on DOM ready ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      showPage(getPageFromHash());
    });
  } else {
    showPage(getPageFromHash());
  }

})();
