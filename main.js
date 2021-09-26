let btn = document.getElementById('change');

let add = document.getElementById('add');
let remove = document.getElementById('remove');

add.onclick = function(){
    btn.addEventListener('click', changeColor);
}

remove.onclick = function(){
    btn.removeEventListener('click', changeColor);
}

function getRandomInteger() {
    return Math.floor((Math.random()*255)+1);
}

function changeColor(event){
    let color = `rgb(${getRandomInteger()},${getRandomInteger()},${getRandomInteger()})`;
    event.target.style.backgroundColor = color;
}