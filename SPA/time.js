window.onload = function () {
    window.setInterval(function(){
        let date = new Date();
        let hour = date.getHours()
        let min = date.getMinutes()
        let sec = date.getSeconds();

        let clock = hour +":"+min+":"+sec
        document.getElementById("clock").innerHTML = clock
    }
    );
}