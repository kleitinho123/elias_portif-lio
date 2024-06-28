const horas = document.getElementById(`horas`);

const minutos = document.getElementById(`minutos`);

const segundos = document.getElementById(`segundos`);


setInterval(() => {

    const dateToday = new Date();

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    horas.textContent = hr;
    minutos.textContent = min;    
    segundos.textContent = sec;

    if (sec < 10) sec = "0" + sec; 
    if (min < 10) sec = "0" + min;
    if (hr < 10) sec = "0" + hr;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    

}, 1);