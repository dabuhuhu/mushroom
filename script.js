const mushroom = document.querySelector('.mushroom');
let timeout;

mushroom.addEventListener('click', function() {
    this.style.animation = 'spin 0.5s linear';
    setTimeout(() => this.style.animation = '', 500);

    const maxX = window.innerWidth - this.offsetWidth;
    const maxY = window.innerHeight - this.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    this.style.left = randomX + 'px';
    this.style.top = randomY + 'px';

    clearTimeout(timeout);
    timeout = setTimeout(() => {
        this.style.left = '0px';
        this.style.top = '0px';
    }, 5000);
});
