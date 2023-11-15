const mushroom = document.querySelector('.mushroom');
let growTimeout;
let clickCount = 0;

mushroom.addEventListener('click', function() {
    clearTimeout(growTimeout);
    clickCount++;

    if (clickCount >= 3) {
        this.style.transform = 'scale(1)';
        clickCount = 0;
    } else {
        this.style.transform = 'scale(1.2)';
    }

    growTimeout = setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 3000);
});
