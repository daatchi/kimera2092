// kimera.js — Preloader & site init

(function () {
  const bar     = document.getElementById('preBar');
  const counter = document.getElementById('preCounter');
  const btn     = document.getElementById('preEnter');
  const loader  = document.getElementById('preloader');

  let progress = 0;
  const duration = 2200; // ms to fill bar
  const interval = 30;
  const step = (interval / duration) * 100;

  const ticker = setInterval(() => {
    progress = Math.min(progress + step + (Math.random() * step * 0.6), 100);
    bar.style.width = progress + '%';
    counter.textContent = Math.floor(progress) + '%';

    if (progress >= 100) {
      clearInterval(ticker);
      bar.style.width = '100%';
      counter.textContent = '100%';
      setTimeout(() => {
        btn.classList.add('visible');
      }, 400);
    }
  }, interval);

  window.enterSite = function () {
    loader.classList.add('hidden');
    document.body.classList.remove('loading');
  };
})();
