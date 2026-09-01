/* Wan-Streamer Minimal — low-key version
   Kept: mobile menu toggle, audio-player exclusivity.
   Removed: scroll-reveal observer (no animations on this page). */

const nav = document.querySelector('#site-nav');
const toggle = document.querySelector('.nav-toggle');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

const audioPlayers = [...document.querySelectorAll('audio')];
audioPlayers.forEach((player) => {
  player.addEventListener('play', () => {
    audioPlayers.forEach((other) => {
      if (other !== player) other.pause();
    });
  });
});
