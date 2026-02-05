import './style.css'

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');

function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const randomX = Math.max(20, Math.floor(Math.random() * maxX));
  const randomY = Math.max(20, Math.floor(Math.random() * maxY));

  noBtn.style.left = randomX + 'px';
  noBtn.style.top = randomY + 'px';
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
  e.preventDefault();
  moveNoButton();
});

noBtn.addEventListener('click', (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener('click', () => {
  document.querySelector('#app').innerHTML = `
    <div class="success-container">
      <img src="https://c.tenor.com/y3ybS-nTWykAAAAC/doraemon-thank-you.gif" alt="Doraemon Thank You" class="gif">
      <h1>Thank youuuuuu Arya ❤️✨</h1>
    </div>
  `;
});

moveNoButton();
