// script.js

// Changing text animation
const changingText = document.getElementById('changing-text');
const words = ['Frontend Web Developer!!!', 'Passionate Learner!!!', 'Python Developer!!!'];
let index = 0;

function changeText() {
    changingText.textContent = words[index];
    index++;
    if (index === words.length) {
        index = 0;
    }
}

setInterval(changeText, 2000);
