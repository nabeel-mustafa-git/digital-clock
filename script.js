var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');

var time;
var degree;
var dPlus;
function theTime() {
    time = new Date();

    //For Hours
    degree = time.getHours();
    degree = degree*30;
    dPlus = time.getMinutes();
    dPlus = dPlus/2;
    degree = degree + dPlus;
    hour.style.transform = 'rotate('+degree+'deg)';


    //For Minutes
    degree = time.getMinutes();
    degree = degree*6;
    dPlus = time.getSeconds();
    dPlus = dPlus/10;
    degree = degree + dPlus;
    minute.style.transform = 'rotate('+degree+'deg)';


    //For Seconds
    degree = time.getSeconds();
    degree = degree*6;
    dPlus = time.getMilliseconds();
    dPlus = dPlus/167;
    degree = degree + dPlus;
    second.style.transform = 'rotate('+degree+'deg)';

}
var temp = setInterval(theTime, 10);