window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.keyword[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    key.classList.add('playing');
    audio.play();
})

function removing(e) {
    if(e.propertyName !== 'box-shadow') return;
    this.classList.remove('playing');
} 

const keys = document.querySelectorAll('.keyword');
keys.forEach(key => key.addEventListener('transitionend', removing) )