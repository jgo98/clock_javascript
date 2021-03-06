/*
    Authors: Joshua Go, Mauricio Velazquez, Davis Fairchild
    Description: Stopwatch features and functions
*/
"use strict";

document.getElementById("startStop").style.display = "none";
document.getElementById("display").style.display = "none";
document.getElementById("resetsw").style.display = "none";
//Define vars to hold time values
//let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold display value
//let displayMiliseconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let intervalSW = null;

//Define var to hold stopwatch status
//False = stopped, True = started
let status = false;

//Stopwatch function(logic to getermine when to increment next value etc.)
function stopWatch(){

   // miliseconds++;
	seconds++;
    //Logic to determine when to increment next value
        if (seconds/60 == 1){
            seconds = 0;
            minutes++;

            if (minutes/60 == 1){
                minutes = 0;
                hours++;

                if (hours == 99){
                    hours = 0;
                }
            }
        }

    //If s/m/h are 0-9, add leading 0 to value
/*    if (miliseconds<100){
        displayMiliseconds = "00" + miliseconds.toString();
    }
    else{
        displayMiliseconds = miliseconds;
    }*/
    if (seconds<10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if (minutes<10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if (hours<10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}

function startStop(){

    if(status === false){

        //Start the stopwatch(by calling the set intervalSWfunction)
        intervalSW= window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = true;
    }
    else{

        window.clearInterval(intervalSW);
        document.getElementById("startStop").innerHTML = "Start";
        status = false;
    }

}


//reset stopwatch function
function resetsw(){
    window.clearInterval(intervalSW);
//    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
//    displayMiliseconds = "0" + miliseconds.toString();
    displaySeconds = "0" + seconds.toString();
    displayMinutes = "0" + minutes.toString();
    displayHours = "0" + hours.toString();
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    document.getElementById("startStop").innerHTML = "Start";
    status = false;
}


function hideSW(mode){
    if (mode == 0){
        document.getElementById("startStop").style.display = "none";
        document.getElementById("display").style.display = "none";
        document.getElementById("resetsw").style.display = "none";
    }else{
        document.getElementById("startStop").style.display = "block";
        document.getElementById("display").style.display = "block";
        document.getElementById("resetsw").style.display = "block";
    }
}