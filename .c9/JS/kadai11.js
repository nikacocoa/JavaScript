let p1 = document.getElementById('p1');
let inputElement = document.createElement('input');
inputElement.setAttribute('type', 'text');
inputElement.setAttribute('placeholder', 'Enter text here');
p1.replaceWith(inputElement);

let p2 = document.getElementById('p2');
p2.textContent = 'テキスト文字列';

let p3 = document.getElementById('p3');
p3.setAttribute('id', 'p5');
