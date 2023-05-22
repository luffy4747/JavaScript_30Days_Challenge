window.addEventListener('keydown', (e) => {
    const mp3 = document.querySelector(`.key-${e.keyCode}`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!mp3) return;

    mp3.currentTime = 0;
    mp3.play();
    key.classList.add('playing');
})

const keys = document.querySelectorAll('.key');

keys.forEach((key) => {
    key.addEventListener('transitionend', (e) => {
        if (e.propertyName !== "transform") return;
        key.classList.remove('playing');
    })
})

// keys.forEach((key) => {
//     key.addEventListener('transitionend', removeTransition)
// })

// function removeTransition(e) {
//     if (e.propertyName !== "transform") return;
//     this.classList.remove('playing');
// }