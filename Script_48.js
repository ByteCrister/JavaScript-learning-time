var timeArea = document.getElementById("time");

var date = new Date();
// console.log(date);
var hours = date.getHours();
if(hours>12){
    hours-=12;
}

var minute = date.getMinutes();
var seconds = date.getSeconds();

var startButton = document.querySelector("#start");

startButton.addEventListener("click", function () {


    setInterval(() => {

            ++seconds;
            if (seconds == 60) {
                seconds = 0;
                minute++;
                if (minute == 60) {
                    minute = 0;
                    hours++;
                    if (hours == 25) {
                        hours = 1;
                    }
                }
            }
            if (seconds < 10) {

                timeArea.textContent = hours + ":" + minute + ":" + "0" + seconds;
            } else {
                timeArea.textContent = hours + ":" + minute + ":" + seconds;

            }
    }, 1000);
});
