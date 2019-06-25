const time = document.getElementById('time');
const name = document.getElementById('name');
const greeting = document.getElementById('greeting');
const focous = document.getElementById('focous');

function showTime(){
    let today = new Date(),
    hour = today.getHours(),
    minute = today.getMinutes(),
    second = today.getSeconds();

    let amPm = hour >= 12 ? 'pm' : 'am';

    let showHour = hour % 12 || 12;

    time.innerHTML = `${setFormat(hour)}<span>:</span>${setFormat(minute)}<span>:</span> ${second}`;

    setTimeout(showTime, 1000);
}

function setFormat(n){
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}
showTime();