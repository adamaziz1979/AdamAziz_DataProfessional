document.querySelectorAll('[data-toggle]').forEach(function (head) {
  head.addEventListener('click', function () {
    var pillar = head.closest('.pillar');
    var wasOpen = pillar.classList.contains('open');
    document.querySelectorAll('.pillar.open').forEach(function (p) {
      if (p !== pillar) p.classList.remove('open');
    });
    pillar.classList.toggle('open', !wasOpen);
  });
});
