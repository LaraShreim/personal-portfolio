// Array of phrases to display
const phrases = ["I'm a developer", "I'm a programmer"];
let phraseIndex = 0; // Current phrase index
let charIndex = 0; // Current character index
const typingSpeed = 150; // Typing speed in milliseconds
const erasingSpeed = 100; // Erasing speed in milliseconds
const delayBetweenPhrases = 1000; // Delay between phrases

const dynamicText = document.getElementById("dynamic-text");

function typeText() {
    if (charIndex < phrases[phraseIndex].length) {
        dynamicText.innerHTML =
            phrases[phraseIndex].slice(0, charIndex + 1) +
            '<span class="cursor">|</span>';
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenPhrases);
    }
}

function eraseText() {
    if (charIndex > 0) {
        dynamicText.innerHTML =
            phrases[phraseIndex].slice(0, charIndex - 1) +
            '<span class="cursor">|</span>';
        charIndex--;
        setTimeout(eraseText, erasingSpeed);
    } else {
        phraseIndex = (phraseIndex + 1) % phrases.length; // Loop through phrases
        setTimeout(typeText, typingSpeed);
    }
}

// Start typing when the document loads
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeText, delayBetweenPhrases);
});



function hamburg() {
    document.querySelector('.dropdown').classList.add('show');
}

function cancel() {
    document.querySelector('.dropdown').classList.remove('show');
}
