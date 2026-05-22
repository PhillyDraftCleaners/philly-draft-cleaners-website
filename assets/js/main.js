/* ============================================================
   PHILLY DRAFT CLEANERS — main.js
   ============================================================ */
(function () {
  'use strict';

  /* --- MOBILE NAV TOGGLE ---------------------------------- */
  var tog = document.getElementById('nav-tog');
  var mob = document.getElementById('nav-mob');
  if (tog && mob) {
    tog.addEventListener('click', function () {
      var open = mob.classList.toggle('open');
      tog.classList.toggle('open', open);
      tog.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mob.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mob.classList.remove('open');
        tog.classList.remove('open');
        tog.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- ACTIVE NAV LINK ------------------------------------ */
  var path = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a, .nav-mob a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').replace(/\/$/, '');
    if (href === path) a.classList.add('active');
  });

  /* --- FAQ ACCORDION -------------------------------------- */
  document.querySelectorAll('.faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      var ans  = item.querySelector('.faq-a');
      var open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (el) {
        el.classList.remove('open');
        el.querySelector('.faq-a').style.maxHeight = '0';
        el.querySelector('.faq-icon').textContent = '+';
        el.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      if (!open) {
        item.classList.add('open');
        ans.style.maxHeight = ans.scrollHeight + 'px';
        item.querySelector('.faq-icon').textContent = '−';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

})();
