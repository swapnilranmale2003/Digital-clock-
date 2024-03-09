const clock = document.getElementById('digital-clock');

setInterval(() => {
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();    
}, 1000);

const days = document.getElementById('day');
setTimeout(() => {
    const d = new Date();
    days.innerHTML = d.toDateString();
    ;
}, 1000);


