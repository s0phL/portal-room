// for neocities' thumbnail imaging
if (navigator.userAgent === "Screenjesus") {
    document.body.innerHTML = '<img src="src/assets/thumbnail.webp" style="width:100%;height:auto;object-fit:fit;">';
}

const bg = document.getElementById("bg");
const popup = document.getElementById("dialogue-popup");
const dialogueContainer = document.getElementById("dialogue-container");
const dialogueText = document.getElementById("dialogue-text");
const closeBtn = document.getElementById("close-btn");
const arrows = document.getElementById("arrows");

const DELAY = 700; // 0.7s to allow fade in animation to occur
const SPEED = 50;
const TEXT = ":p lol can't (too lazy to) figure out how to upload the actual website onto here, so built a portal to it instead.";

let timer;
let i = 0;

// hide arrows
arrows.style.display = "none";

// show popup when page loads
popup.style.display = "flex";

setTimeout(typeWriter, DELAY);

// auto close after 8 sec
timer = setTimeout(closePopup, 11000);

// show the message text character by character
function typeWriter() {
    if (i < TEXT.length) {
        dialogueText.textContent += TEXT.charAt(i);
        i++;
        setTimeout(typeWriter, SPEED);
    }
}

function closePopup() {
    popup.style.display = "none";
    arrows.style.display = "flex";
    clearTimeout(timer);
}

// close button
closeBtn.addEventListener("click", closePopup);

// click outside image to close
bg.addEventListener("click", (e) => {
    if (e.target !== popup) {
        closePopup();
    }
});