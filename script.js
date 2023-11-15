const mushroom = document.querySelector('.mushroom');
let secondMushroomAdded = false;

function getRandomPosition(element) {
    const maxX = window.innerWidth - element.offsetWidth;
    const maxY = window.innerHeight - element.offsetHeight;
    return { x: Math.random() * maxX, y: Math.random() * maxY };
}

function moveElement(element) {
    const { x, y } = getRandomPosition(element);
    element.style.left = x + 'px';
    element.style.top = y + 'px';
}

function resizeElement(element) {
    const scale = Math.random() > 0.5 ? 1.2 : 0.8;
    element.style.transform = `scale(${scale})`;
}

function addSecondMushroom() {
    if (secondMushroomAdded) return;

    const newMushroom = mushroom.cloneNode(true);
    document.body.appendChild(newMushroom);
    moveElement(newMushroom);
    secondMushroomAdded = true;
}

mushroom.addEventListener('mouseenter', function() {
    if (Math.random() > 0.7) {
        moveElement(this);
    } else {
        resizeElement(this);
    }

    if (Math.random() > 0.9) {
        addSecondMushroom();
    }
});

mushroom.addEventListener('click', function() {
    this.style.transform = 'scale(1)';
    this.style.left = '50%';
    this.style.top = '50%';
    this.style.transform = 'translate(-50%, -50%)';
});

// Apply the same logic to the second mushroom if it exists
document.body.addEventListener('click', function(e) {
    if (e.target !== mushroom && e.target.className === 'mushroom') {
        e.target.style.transform = 'scale(1)';
        e.target.style.left = '50%';
        e.target.style.top = '50%';
        e.target.style.transform = 'translate(-50%, -50%)';
    }
});
