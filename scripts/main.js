let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = myName + '欢迎来到 Heiko\'s Blog';
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '欢迎来到 Heiko\'s Blog';
}

myButton.onclick = function() {
    setUserName();
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/head_portrait_ok.png') {
        myImage.setAttribute('src', 'images/head_portrait_blink.png');
    } else {
        myImage.setAttribute('src', 'images/head_portrait_ok.png');
    }
}