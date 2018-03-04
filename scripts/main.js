var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
let welcomeMessage = 'What\'s up ';

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = welcomeMessage + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = welcomeMessage + storedName;
}

myButton.onclick = function() {
    setUserName();
}
