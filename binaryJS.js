var timeInterval = 500;
//document.getElementById('time').innerHTML = 'timeInterval';

function getDots(){
    return document.getElementsByTagName('svg');
}
function setBinaryTime(){
    
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var binTime;

    document.getElementById('time').innerHTML = 'Time: ' + hour + ':' + min + ':' + sec;

    var dots = getDots();
    /*
    for(var i=0; i < dots.length; i++){
        if(dots[i].className.baseVal == "on"){
            dots[i].className.baseVal = "off";
           
        }
    }
    */
    var timeH = hour.toString(10).split("").map(Number);
    var timeM = min.toString(10).split("").map(Number);
    var timeS = sec.toString(10).split("").map(Number);
    if(timeH.lenth < 2){
        timeH = [0].concat(timeH);
    }
    if(timeM.length < 2){
        timeM = [0].concat(timeM);
    }
    if(timeS.length < 2){
        timeS = [0].concat(timeS);
    }
    timeH = timeH.concat(timeM);
    var time = timeH.concat(timeS);
    var hourTens = parseInt(time[0], 10).toString(2);
    hourTens = hourTens.toString(10).split("").map(Number);
    var hourOnes = parseInt(time[1], 10).toString(2);
    hourOnes = hourOnes.toString(10).split("").map(Number);

    var minTens = parseInt(time[2], 10).toString(2);
    minTens = minTens.toString(10).split("").map(Number);
    var minOnes = parseInt(time[3], 10).toString(2);
    minOnes = minOnes.toString(10).split("").map(Number);

    var secTens = parseInt(time[4], 10).toString(2);
    secTens = secTens.toString(10).split("").map(Number);
    var secOnes = parseInt(time[5], 10).toString(2);
    secOnes = secOnes.toString(10).split("").map(Number);

    // Organize the hours
    if(hourTens.length < 2){
        hourTens = [0].concat(hourTens);
    }
    if(hourOnes.length < 4){
        if(hourOnes.length < 3){
            if(hourOnes.length < 2){
                hourOnes = [0].concat(hourOnes);
            }
            hourOnes = [0].concat(hourOnes);
        }
        hourOnes = [0].concat(hourOnes);
    }
    binTime = hourTens.concat(hourOnes);

    // Organize the minutes
    if(minTens.length < 3){
        if(minTens.length < 2){
            minTens = [0].concat(minTens);
        }
        minTens = [0].concat(minTens);
    }
    binTime = binTime.concat(minTens);
    if(minOnes.length < 4){
        if(minOnes.length < 3){
            if(minOnes.length < 2){
                minOnes = [0].concat(minOnes);
            }
            minOnes = [0].concat(minOnes);
        }
        minOnes = [0].concat(minOnes);
    }
    binTime = binTime.concat(minOnes);

    // Organize the seconds
    if(secTens.length < 3){
        if(secTens.length < 2){
            secTens = [0].concat(secTens);
        }
        secTens = [0].concat(secTens);
    }
    binTime = binTime.concat(secTens);
    if(secOnes.length < 4){
        if(secOnes.length < 3){
            if(secOnes.length < 2){
                secOnes = [0].concat(secOnes);
            }
            secOnes = [0].concat(secOnes);
        }
        secOnes = [0].concat(secOnes);
    }
    binTime = binTime.concat(secOnes);

    for(var i = 0; i < binTime.length; i++){
        if(binTime[i] == 1){
            dots[i].className.baseVal = 'on';
        }else{
            dots[i].className.baseVal = 'off';
        }
    }
    setTimeout(setBinaryTime, timeInterval);
}
function startBinaryClock(){
    setTimeout(setBinaryTime, timeInterval);
}
startBinaryClock();