document.addEventListener('DOMContentLoaded', () => {
  const surpriseButton = document.getElementById('surpriseButton');
  const introSection = document.getElementById('intro-section');
  const gallerySection = document.getElementById('gallery-section');
  const carouselInner = document.getElementById('carousel-inner');
  const captionText = document.getElementById('captionText');

  const images = [
    { src: 'foto1.jpeg', desc: 'Nosso primeiro encontrãooo! ❤️' },
    { src: 'foto2.jpeg', desc: 'Sorriso que me encantaa! 😍' },
    { src: 'foto3.jpeg', desc: 'Nosso primeiro relêzãoo e que beijãooooo! 😘' },
    { src: 'foto4.jpeg', desc: 'Abraço que me acolhe e me faz sentir seguro! 🤗' },
    { src: 'foto6.png', desc: 'Realizou o meu sonho, tour na arena em um dia especial com uma pessoa especial! 🏟️🏆❤️' },
    { src: 'foto7.jpeg', desc: 'Primeiro rolêzinho de festa junina que eu vou! kkk 🔥🌽'},
    { src: 'foto8.jpeg', desc: 'Simplesmente zueirinha haha, e isso te faz unica! 🤪😻' },
    { src: 'foto5.jpeg', desc: 'Hoje completamos 5 meses dessa nossa história linda que só cresce a cada dia. Amoréco, eu sou tão grato por ter vc ao meu lado, por cada sorriso, abraço e cada momento que compartilhamos juntos. Vc é meu aconchego, minha alegria, meu tudãooooo. Que venham muitos meses e anos pela frente, sempre com esse amor que só aumenta e aquece o coração e acima de tudo, que vc continue sendo essa mulher de Deus que vc é!. Te amo demais, minha pretinhaaaaa! ❤️ 💕' },
  ];

  let currentIndex = 0;

  function updateCarousel() {
    carouselInner.innerHTML = '';
    const img = document.createElement('img');
    img.src = images[currentIndex].src;
    img.alt = `Foto ${currentIndex + 1}`;
    carouselInner.appendChild(img);
    captionText.textContent = images[currentIndex].desc;
  }

  document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  });

  document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  });

  // Corações
  let heartCount = 0;
  const maxHearts = 6;

  function createHeart() {
    if (heartCount >= maxHearts) return;
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.textContent = ['❤️','💖','💕'][Math.floor(Math.random()*3)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (5 + Math.random() * 3) + 's';
    document.body.appendChild(heart);
    heartCount++;
    heart.addEventListener('animationend', () => {
      heart.remove();
      heartCount--;
    });
  }

  function startHearts() {
    setInterval(() => {
      createHeart();
    }, 2000);
  }

  // Clique botão
  surpriseButton.addEventListener('click', () => {
    introSection.classList.add('hidden');
    gallerySection.classList.remove('hidden');
    updateCarousel();
    startHearts();
  });
});
