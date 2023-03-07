function startTime() {
        document.getElementById('clock').innerHTML = new Date();
        setTimeout(startTime, 500);
}
