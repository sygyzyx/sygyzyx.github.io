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
