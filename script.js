// HI TEXT ANIMATION 
document.addEventListener('DOMContentLoaded', function() {
    const HIText = document.getElementById('HIText');
    const text = HIText.textContent
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
const scrollButton = document.getElementById('scrollButton');
scrollButton.addEventListener('click', () => {
  const targetElement = document.querySelector('.section2Body');
  targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
});
//


//SOPHISTICATED ANIMATION
const QUOTEobserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('write');
    } else {
      entry.target.classList.remove('write');
    }
  });
});
const quote = document.querySelector('#quote-text-2');
TEXT = quote.textContent
QUOTEobserver.observe(quote)
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


// CHANGING TEXT 
const changingText = document.querySelectorAll('.changingText');
function getRandomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function changeTextContent(item) {
  const currentText = item.textContent;
  const toggledText = currentText === currentText.toUpperCase() ? currentText.toLowerCase() : currentText.toUpperCase();
  item.textContent = toggledText;
  item.classList.toggle('first');
  item.classList.toggle('second');
  const interval = getRandomInterval(250, 5000);
  setTimeout(() => changeTextContent(item), interval);
}
changingText.forEach(item => {
  const interval = getRandomInterval(2000, 5000);
  setTimeout(() => changeTextContent(item), interval);
});
// 
