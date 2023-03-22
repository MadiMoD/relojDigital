const showClock = ()=>{
    let date= new Date();
    let hr= formatoHora(date.getHours());
    let min = formatoHora(date.getMinutes());
    let seg = formatoHora(date.getSeconds());
    document.getElementById('hora').innerHTML= `${hr}:${min}:${seg}`;

    const months = ['Jan', 'Feb', 'Mar', 'Apr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const days= ['Sun','Sat','Mon', 'Tue','wed','Thu','Fri'];
    let dayMonth = days [date.getDay()];
    let day = date.getDate();
    let month= months [date.getMonth()];
    let dateText= `${dayMonth}, ${day} ${month}`;
    document.getElementById('fecha').innerHTML=dateText;
    
    document.getElementById('contenedor').classList.toggle('animar');

}

const formatoHora = (hora)=> {
    if(hora<10)
    hora= '0' +hora;
    return hora;
}

setInterval(showClock,1000); /*Muestra cada segundo*/ 