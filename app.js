window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();

    function addME() {
        key.classList.add('playing')
    };

    function remME() {
        key.classList.remove('playing')
    };

    function on() {
        setTimeout(addME, 80)
        setTimeout(remME, 200)
    }
    on();
});
//function removeTran(e) {
//    console.log(e.propertyName)
//    keys.forEach
//    
//}
//const keys = document.querySelectorAll('.key');
//key.forEach(key => key.addEventListener('transitioned', removeTran));