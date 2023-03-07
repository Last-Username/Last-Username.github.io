function startTime() {
        document.getElementById('clock').innerHTML = new Date();
        setTimeout(startTime, 500);
}

var shown = false;
function showhide(){
        if (shown){
                document.getElementById('email').innerHTML = "show my email";
                shown = false;
        }else{
                var myemail = "<a href='mailto:tiltona1"+ "@" + "udayton.edu'>YOURemailID " +"@" + "udayton.edu</a>";
                document.getElementById('email').innerHTML= myemail;
                shown = true;
        }
}
