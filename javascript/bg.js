const body = document.querySelector("body");

const IMG_NUM = 9;

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUM);
    return number;
}

function paintImage(imgNumber) {
    const image = new Image;
    image.src = `./img/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage');
    body.appendChild(image);
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();