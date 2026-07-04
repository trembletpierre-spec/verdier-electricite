/* =========================================================
   VERDIER Électricité — script.js
   Vanilla JS, aucune dépendance. Sections : menu mobile, FAQ.
   ========================================================= */

(function () {
  'use strict';

  /* ---- Menu mobile (burger) ---- */
  var header = document.querySelector('.site-header');
  var burger = document.querySelector('.burger');
  if (burger && header) {
    burger.addEventListener('click', function () {
      var isOpen = header.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', String(isOpen));
    });
    // Ferme le menu mobile après un clic sur un lien
    var mobileLinks = header.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        header.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- FAQ accordéon ---- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', function () {
      var isOpen = item.getAttribute('data-open') === 'true';
      // Ferme les autres (accordéon simple)
      faqItems.forEach(function (i) {
        i.setAttribute('data-open', 'false');
        var q = i.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });
      item.setAttribute('data-open', isOpen ? 'false' : 'true');
      question.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    });
  });

  /* ---- Formulaire de devis (démonstratif, non branché) ---- */
  var form = document.querySelector('.devis-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // À BRANCHER : remplacer action="#" par une intégration Formspree
      // (ou équivalent) puis retirer ce handler pour laisser la soumission
      // native s'exécuter.
      var feedback = form.querySelector('.form-feedback');
      if (feedback) {
        feedback.textContent = 'Merci ! Ce formulaire de démonstration n’est pas encore connecté — branchez-le à Formspree (ou équivalent) avant mise en ligne.';
      }
    });
  }
})();
