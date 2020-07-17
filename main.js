function reload() {
    var time = new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }

    document.getElementById('hour').innerHTML = hours + ":";
    document.getElementById('minute').innerHTML = mins + ":";
    document.getElementById('second').innerHTML = secs;
}

setInterval(reload,100)
