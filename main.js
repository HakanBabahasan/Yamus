onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  // İyi ki doğdun yazısı animasyonu
  /*
setTimeout(() => {
  const message = document.querySelector(".birthday-message");
  message.style.opacity = "1";
}, 1500);
*/
const textElement = document.querySelector(".birthday-message");
const text = textElement.innerText;
textElement.innerText = "";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    textElement.innerText += text[index];
    textElement.style.opacity = 1; // Yazı görünür hale gelir
    index++;
    setTimeout(typeEffect, 100); // Harflerin görünme süresi
  }
}

typeEffect();
