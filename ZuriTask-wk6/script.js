let butonIcons = document.getElementsByClassName('btn');
let images = document.getElementsByTagName('img');

//Mouse over effect
images.addEventListener('click', e => {
    butonIcons.target.style.opacity = 1;
    console.log(butonIcons)
});