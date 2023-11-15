let mushrooms = [];
const mushroomEmoji = '🍄';
let mushroomCount = 1;

function createMushroom() {
    const mushroom = document.createElement('div');
    mushroom.className = 'mushroom';
    mushroom.textContent = mushroomEmoji;
    mushroom.style.left = Math.random() * window.innerWidth + 'px';
    mushroom.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Random duration between 5 to 10 seconds
    document.body.appendChild(mushroom);
    mushrooms.push(mushroom);
}

function doubleMushrooms() {
    for (let i = 0; i < mushroomCount; i++) {
        createMushroom();
    }
    mushroomCount *= 2;
}

function resetPosition() {
    mushrooms.forEach(mushroom => {
        if (parseInt(mushroom.style.top) > window.innerHeight) {
            mushroom.style.top = '-50px';
            mushroom.style.left = Math.random() * window.innerWidth + 'px';
        }
    });
}

document.body.addEventListener('click', doubleMushrooms);
document.body.addEventListener('keydown', function(e) {
    if (e.key === ' ') {
        doubleMushrooms();
    }
});

setInterval(resetPosition, 100);

// Start with one mushroom
createMushroom();
