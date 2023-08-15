const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

console.log(secondHand)
console.log(minuteHand)

const showSecondTime = document.querySelector('.seconds-time');


function time() {
    const times = new Date();
    let seconds = times.getSeconds();
    let minute = times.getMinutes();
    let hour = times.getHours();
    const secondsDeg = ((seconds / 60) * 360) + 90;
    const minuteDeg = ((minute / 60) * 360) + 90;
    const hourDeg = ((hour / 12) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`
    hourHand.style.transform = `rotate(${hourDeg}deg)`
    
    if (secondsDeg < 150) {
        seconds = `0${seconds}`;
    }
    if (minuteDeg < 150) {
        minute = `0${minute}`;
    }
    if (hourDeg < 390) {
        hour = `0${hour}`;
    }
    showSecondTime.innerHTML = `${hour} : ${minute} : ${seconds}`;

}

setInterval(time, 1000);

