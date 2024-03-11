"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--sim");
const noButton = document.querySelector(".btn--não");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

simButton.addEventListener("click", handleSimClick);

nãoButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleSimClick() {
  titleElement.innerHTML = Te amo!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("sim");
}

function resizeSimButton() {
  const computedStyle = window.getComputedStyle(simButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  simButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Não",
    "Você tem certeza?",
    "poxa...",
    "faz isso comigo não:(",
    "Meu coração está partido buabua",
    "Indo chorar i tals...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNãoButtonText() {
  nãoButton.innerHTML = generateMessage(noCount);
}
