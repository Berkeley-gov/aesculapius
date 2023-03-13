let rowsY = 10;
let columnsX = 25;

let container = document.querySelector('.container-animation');

for (let i = 0; i < rowsY * columnsX; i++) {
    let box = document.createElement('div');
    box.setAttribute('class', 'box');
    container.appendChild(box);
}

console.log('hello world')