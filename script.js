// HI TEXT ANIMATION 
document.addEventListener('DOMContentLoaded', function() {
    const HIText = document.getElementById('HIText');
    const text = HIText.textContent
console.log(text);
const texts = ['नमस्ते','¡Hola!','こんにちは', 'Salut !', 'Ciao','안녕하세요', 'Olá','你好', 'Hallo !', 'Привет', 'مرحبا', 'สวัสดี'];
let currentIndex = 0;
function changeText() {
    HIText.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
}
setInterval(changeText, 1000);
  });
//

// ABOUT ME ANIMATION 
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

let lastScrollPosition = window.pageYOffset;

document.addEventListener('scroll', function () {
  const currentScrollPosition = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const scrollThreshold = windowHeight * 0.7;

  if (currentScrollPosition > lastScrollPosition) {
    // Scrolling down
    hiddenElements.forEach((el) => {
      if (!el.classList.contains('show')) {
        el.classList.add('show');
      }
    });
  } else {
    // Scrolling up
    hiddenElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const elementPosition = rect.top - scrollThreshold;
      const isVisible = elementPosition <= 0 && rect.bottom >= 0;
      if (isVisible) {
        el.classList.add('show');
      } else {
        el.classList.remove('show');
      }
    });
  }

  lastScrollPosition = currentScrollPosition;
});



//


// SCROLL DOWN ARROW ANIMATION 
window.addEventListener('load', function() {
  setTimeout(function() {
    var element = document.querySelector('.material-symbols-outlined');
    element.style.opacity = '1';
  }, 4000); // Delay in milliseconds (10 seconds)
});
//

