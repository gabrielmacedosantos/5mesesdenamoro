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
    { src: 'foto5.jpeg', desc: '5 meses de muito amorzão! 💕' }
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
