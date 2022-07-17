const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const Hour = String(date.getHours()).padStart(2, "0")  ;
    const Minute = String(date.getMinutes()).padStart(2, "0") ;
    const Second = String(date.getSeconds()).padStart(2, "0") ; 
    clock.innerText = `${Hour}:${Minute}:${Second}`;
}

getClock();
setInterval(getClock, 1000);
