const  daysE1 = document.querySelector("#days");
const  hoursE1 = document.querySelector("#hours");
const  minutesE1 = document.querySelector("#minutes");
const  secondsE1 = document.querySelector("#seconds");
const startBtn  = document.querySelector("#startBtn");
const pauseBtn  = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");


let Interval;
let secondsE1 = 0;
let minutesE1 = 0;
let hoursE1 = 0;
let daysE1 = 0;
let ispaused = false;

.startBtn addEventListener ("click", startTimer)

function startTimer(){
     Interval setInterval (( ){
        if(!isPaused) {

          seconds += 10
          
          if (seconds === 60) {
            minutes++;
            seconds = 0;
            
          } 

         if (minutes === 60){
           hours++;
           minutes = 0;
         }

        if (hours === 24){
          days++;
          hours = 0;
        }

        secondsE1.textContent = seconds;
        minutesE1.textContent = minutes;
        hoursE1.textContent = hours;
        daysE1.textContent = days;
     }
     } 10)

     func
}