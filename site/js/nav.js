(function () {
  var toggle = document.querySelector('.site-nav__toggle');
  var nav = document.getElementById('site-nav');

  if (!toggle || !nav) {
    return;
  }

  var desktopQuery = window.matchMedia('(min-width: 900px)');

  function syncNavState() {
    if (desktopQuery.matches) {
      nav.classList.remove('site-nav--collapsed');
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      nav.classList.add('site-nav--collapsed');
      toggle.setAttribute('aria-expanded', 'false');
    }
  }

  syncNavState();

  toggle.addEventListener('click', function () {
    var isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('site-nav--collapsed', isExpanded);
  });

  if (desktopQuery.addEventListener) {
    desktopQuery.addEventListener('change', syncNavState);
  } else {
    desktopQuery.addListener(syncNavState);
  }
})();
