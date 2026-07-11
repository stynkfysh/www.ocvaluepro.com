// Mobile nav toggle
(function () {
  var btn = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); });
    });
  }
})();

// Tag every submission with the originating website so Brian sees where it came from
(function () {
  var TAG = 'Submitted from OC Value Pro \u2014 https://www.ocvaluepro.com (Orange County date-of-death appraisals)';
  document.querySelectorAll('form.contact-form').forEach(function (f) {
    f.addEventListener('submit', function () {
      var m = f.querySelector('[name="message"]');
      if (m) { m.value = (m.value ? m.value + '\n\n' : '') + '[' + TAG + ']'; }
    });
  });
})();
