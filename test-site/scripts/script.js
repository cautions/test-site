var myImg = document.querySelector('img');

myImg.onclick = function () {
    var src = myImg.getAttribute('src');
    if(src == 'images/chromelogo.0.0.jpg'){
        myImg.setAttribute('src','images/firefox-logo.jpg');
    } else {
        myImg.setAttribute('src', 'images/chromelogo.0.0.jpg')
    }
}

var myB = document.querySelector('button');
var myH = document.querySelector('h1');

function setUserName() {
    var myN = prompt('please enter your name. ');
    localStorage.setItem('name', myN);
    myH.textContent = 'google is cool, ' + myN;
}