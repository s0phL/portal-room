// for neocities' thumbnail imaging
if (navigator.userAgent === "Screenjesus") {
    document.body.innerHTML = '<img src="src/assets/thumbnail.webp" style="width:100%;height:auto;object-fit:fit;">';
}

const portalAudio = document.getElementById("portal-audio");
const typingAudio = document.getElementById("typing-audio");
const closeAudio = document.getElementById("close-audio");

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

portalAudio.volume = 0.40; // 40% volume

// hide arrows
arrows.style.display = "none";

// show popup when page loads
popup.style.display = "flex";

setTimeout(() => {
    typingAudio.play();
    typeWriter();
}, DELAY);

// auto close after 8 sec
timer = setTimeout(closePopup, 11000);

// show the message text character by character
function typeWriter() {
    if (i < TEXT.length) {
        dialogueText.textContent += TEXT.charAt(i);
        i++;
        setTimeout(typeWriter, SPEED);
    } else {
        typingAudio.pause();
    }
}

function closePopup() {
    popup.style.display = "none";
    arrows.style.display = "flex";
    typingAudio.pause();
    clearTimeout(timer);
}

// close button
closeBtn.addEventListener("click", () => {
    closeAudio.play();
    closePopup();
});

// click outside image to close
bg.addEventListener("click", (e) => {
    if (e.target !== dialogueContainer) {
        closePopup();
    }
});

// const portal = document.getElementById(".portal");
// const enterAudio = document.getElementById("portal-enter-audio");

// portal.addEventListener("click", (e) => {
//   e.preventDefault();

//   enterAudio.currentTime = 0;
//   enterAudio.play();

//   enterAudio.onended = () => {
//     window.location.href = portal.href;
//   };
// });

// document.addEventListener("click", () => {
//     portalAudio.volume = 0.40;
//     portalAudio.muted = false;
// }, { once: true });