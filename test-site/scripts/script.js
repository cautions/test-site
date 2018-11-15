
var myB = document.querySelector('button');
var myH = document.querySelector('h1');

setUserName();

myB.onclick = function () {
    setUserName();
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myH.textContent = 'This website is ' + storedName;
}

function setUserName() {
    var myN = prompt('please enter your name. ');
    localStorage.setItem('name', myN);
    myH.textContent = 'google is cool, ' + myN;
}

var myImg = document.querySelector('img');

myImg.onclick = function () {
    var src = myImg.getAttribute('src');
    if(src == 'images/chromelogo.0.0.jpg'){
        myImg.setAttribute('src','images/firefox-logo.jpg');
    } else {
        myImg.setAttribute('src', 'images/chromelogo.0.0.jpg')
    }
}