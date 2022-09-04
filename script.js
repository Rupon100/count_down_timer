const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minutesEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")

function countDown(){
    const eventTime = new Date("1 january 2023 12:00:00");
    const currentTime = new Date().getTime();
    const timeDiff = (eventTime - currentTime);
    
    const secondsRemain = Math.floor((timeDiff/1000) % 60);
    const minutesRemain = Math.floor((timeDiff/1000/60) %60);
    const hoursRemain = Math.floor(timeDiff/(1000*60*60)%24);
    const daysRemain = Math.floor(timeDiff / (1000*60*60*24));
    
    daysEl.innerHTML = daysRemain;
    hoursEl.innerHTML = hoursRemain;
    minutesEl.innerHTML = minutesRemain;
    secondsEl.innerHTML = secondsRemain;
}
countDown()
setInterval(countDown, 1000)


























