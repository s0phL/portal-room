// for neocities' thumbnail imaging
console.log(navigator.userAgent);

if (navigator.userAgent === "Screenjesus") {
    document.body.innerHTML =
        '<img src="/src/assets/thumbnail.webp" style="width:100%;object-fit:contain;"/>';
}

const portalAudio = document.getElementById("portal-audio");
// const portalEnterAudio = document.getElementById("portal-enter-audio");
const typingAudio = document.getElementById("typing-audio");
const closeAudio = document.getElementById("close-audio");

const bg = document.getElementById("bg");
const portal = document.getElementById("portal");
const arrows = document.getElementById("arrows");

const dialogue = document.getElementById("dialogue-popup");
const dialogueContainer = document.getElementById("dialogue-container");
const dialogueText = document.getElementById("dialogue-text");
const closeBtn = document.getElementById("close-btn");

const hud = document.getElementById("hud-overlay");
const crtLine = document.getElementById("crt-line");
const contBtn = document.getElementById("continue-btn");

const DELAY = 700; // 0.7s to allow fade in animation to occur
const SPEED = 50;
const TEXT = ":p lol can't (too lazy to) figure out how to upload the actual website onto here, so built a portal to it instead.";

let timer;
let i = 0;

portalAudio.volume = 0.40; // 40% volume

// hide arrows
arrows.style.display = "none";

// hide dialogue
dialogue.style.display = "none";

// show hud on page load
hud.style.display = "flex";
portal.style.pointerEvents = "none";

function closeHud() {
    dialogue.style.display = "flex";

    setTimeout(() => {
        typingAudio.play();
        typeWriter();
    }, DELAY);

    // auto close after 8 sec
    timer = setTimeout(closeDialogue, 11000);
}

contBtn.addEventListener("click", () => {
    hud.classList.add("shutdown");
    crtLine.classList.add("shutdown");
    closeHud();
});

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

function closeDialogue() {
    dialogue.style.display = "none";
    arrows.style.display = "flex";
    portal.style.pointerEvents = "auto";
    typingAudio.pause();
    clearTimeout(timer);
}

// close button
closeBtn.addEventListener("click", () => {
    closeAudio.play();
    closeDialogue();
});

// click outside image to close
bg.addEventListener("click", (e) => {
    if (dialogue.style.display !== "flex") return;
    // if (e.target !== dialogueContainer) {
    if (!dialogue.contains(e.target)) {
        closeDialogue();
    }
});

// document.addEventListener("click", () => {
//     portalAudio.volume = 0.40;
//     portalAudio.muted = false;
// }, { once: true });