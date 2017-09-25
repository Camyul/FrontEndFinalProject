let div = document.createElement('div');
let inputButton = document.createElement('button');

div.innerHTML = 'Final Project';
inputButton.className += ' btn btn-success';
inputButton.innerText = 'Test';

const $container = $('#app-container');

$container.append(div);
$container.append(inputButton);
