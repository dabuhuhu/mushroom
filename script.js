let mushroomCount = 1;
let currentEmoji = '🍄';
let typedString = '';
const mushroomEmoji = '🍄';
const sushiEmoji = '🍣';

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.textContent = currentEmoji;
    emoji.style.left = Math.random() * window.innerWidth + 'px';
    emoji.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random duration between 5 to 10 seconds
    document.body.appendChild(emoji);
}

function doubleEmojis() {
    for (let i = 0; i < mushroomCount; i++) {
        createEmoji();
    }
    mushroomCount *= 2;
}

function toggleEmoji() {
    currentEmoji = currentEmoji === mushroomEmoji ? sushiEmoji : mushroomEmoji;
    document.querySelectorAll('.emoji').forEach(el => el.textContent = currentEmoji);
}

document.body.addEventListener('click', doubleEmojis);
document.body.addEventListener('keydown', function(e) {
    if (e.key === ' ') {
        doubleEmojis();
    }

    typedString += e.key;
    if (typedString.includes("sushi")) {
        toggleEmoji();
        typedString = ''; // Reset the typed string
    }
});

// Start with one emoji
createEmoji();
