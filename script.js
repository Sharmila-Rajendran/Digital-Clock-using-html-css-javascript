setInterval(CurrentTime,1000);

function CurrentTime(){
    const time=new Date();
    let hours=time.getHours();
    let minutes=time.getMinutes();
    let seconds=time.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById('hour').innerHTML=hours;
    document.getElementById('min').innerHTML=minutes;
    document.getElementById('sec').innerHTML=seconds;
    document.getElementById('ampm').innerHTML = ampm;
}

CurrentTime();