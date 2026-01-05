const scene = document.querySelector('.MainEndDiv');
const textblock = document.querySelector('.textblock');
const pencilImg = ['img/pencil.svg', 'img/pencil2.svg', 'img/pencil3.svg'];
const button = document.getElementById('toggle');

const pencils = [];

for (let i = 0; i < 50; i++) {
  const div = document.createElement('div');
  div.classList.add('pencil');
  
  const img = document.createElement('img');
  img.draggable = false;
  img.src = pencilImg[Math.floor(Math.random() * pencilImg.length)];
  div.appendChild(img);
  scene.appendChild(div);

  // задаём рандомный размер
  const w = 20 + Math.random() * 80; // 20-100px
  const h = 20 + Math.random() * 80; // 20-100px
  div.style.width = `${w}px`;
  div.style.height = `${h}px`;

  // создаём объект с состоянием
  pencils.push({
    element: div,
    x: Math.random() * 100,
    y: -Math.random() * 200,
    speed: 1 + Math.random() * 10,
    rotation: Math.random() * 360,
    width: w,
    height: h
  });

  // применяем начальный transform
  div.style.left = `${pencils[i].x}%`;
  div.style.transform = `translate(-50%, ${pencils[i].y}px) rotate(${pencils[i].rotation}deg)`;
}

let isRunning = false;
let animationId = null;
let timeoutId = null; // для таймера остановки

function animate() {
  if (!isRunning) return;

  for (let i = 0; i < pencils.length; i++) {
    const p = pencils[i];
    p.y += p.speed;

    if (p.y > window.innerHeight) {
      p.y = -80;
    }

    p.element.style.transform = `translate(-50%, ${p.y}px) rotate(${p.rotation}deg)`;
  }

  animationId = requestAnimationFrame(animate);
}

button.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    button.textContent = 'Stop';
    
    // обновляем случайный поворот всех карандашей
    pencils.forEach(p => {
      p.rotation = Math.random() * 360;
    });

    animate();

    // через 5 секунд автоматически остановить анимацию
    timeoutId = setTimeout(() => {
      isRunning = false;
      cancelAnimationFrame(animationId);
      button.textContent = 'Start';
    }, 3000);

  } else {
    // если нажали "Stop" вручную
    isRunning = false;
    cancelAnimationFrame(animationId);
    button.textContent = 'Start';
    if (timeoutId) clearTimeout(timeoutId);
  }

  textblock.classList.add('newtrans')
});