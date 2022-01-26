'use strict'

const linkNameRegister = document.getElementById('linkNameRegister');

let contents = document.getElementById('contents');

linkNameRegister.addEventListener('click', function () {
    const name = document.getElementById('name');
    const url = document.getElementById('url');

    let nameTag = document.createElement('div');
    let urlTag = document.createElement('div');

    nameTag.innerHTML = name.value;
    urlTag.innerHTML = url.value;

    contents.appendChild(nameTag);
    contents.appendChild(urlTag);

    console.log('linkNameRegister');
}, false);

