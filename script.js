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
document.addEventListener('DOMContentLoaded', function () {
  var title = document.querySelector('.section2BodyHeadTitle');
  var quote = document.querySelector('#quote-text-2');

  function checkScroll() {
    var elementPosition = title.getBoundingClientRect().top;

    if (elementPosition - window.innerHeight <= 0) {
      title.classList.add('animate');
      quote.classList.add('write')
    }
  }

  checkScroll();

  window.addEventListener('scroll', checkScroll);
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

// CHANGING TEXT 
const changingText = document.querySelectorAll('.changingText');
function getRandomInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRandomColor() {
  const abc = '0123456789ABCDEF';
  let color = '#';
  // console.log(Math.floor(Math.random() * 16));
  for (let i=0; i<6; i++) {
    color += abc[Math.floor(Math.random() * 16)];
    // console.log(color);
  }
  return color;
}
function changeTextContent(item) {
  const currentText = item.textContent;
  const toggledText = currentText === currentText.toUpperCase() ? currentText.toLowerCase() : currentText.toUpperCase();
  item.style.color = getRandomColor();
  item.style.filter = 'blur(1px);'
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


// TTS 
const textToSpeech = (message) => {
  const speech = new SpeechSynthesisUtterance(message);
  var voice = speechSynthesis.getVoices();
  speech.voice = voice[2]
  speech.pitch = 0.7;
  speech.rate = 0.9;
  speechSynthesis.speak(speech);
}

const aadesh = document.getElementById('pageTitleHead')
aadesh.addEventListener('click', () => {textToSpeech('ahdeysh')})
;
//


const imgElement = document.getElementById('zoomableImg');

function zoomImage() {
  imgElement.classList.toggle('zoomed');
}

setInterval(zoomImage, 5000);

