let start = document.getElementById('start')
let reset = document.getElementById('reset')
let hour = 0
let minute = 0
let second = 0
let miliSecond = 0
let isrunning = false

start.addEventListener('click', function(){
    if(!isrunning){
        document.getElementById('start').innerHTML = 'Stop'
        isrunning = true
        timer = true
        stopwatch()
    }
    else{
        document.getElementById('start').innerHTML = 'Start'
        isrunning = false
        timer = false
    }
})
reset.addEventListener('click', function(){
    timer = false
    hour = 0
    minute = 0
    second = 0
    miliSecond = 0
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('ms').innerHTML = "00"; 
})
function stopwatch(){
    if(timer){
        miliSecond++
        if(miliSecond == 100){
            second++
            miliSecond = 0
        }
        if(second == 60){
            minute++
            second = 0
        }
        if(minute == 60){
            hour++
            minute = 0
            second = 0
        }
        let hrString = hour
        let minString = minute
        let secString = second
        let msString = miliSecond

        if(hour < 10){
            hrString = "0" + hrString
        }
        if(minute < 10){
            minString = "0" + minString
        }
        if(second < 10){
            secString = "0" + secString
        }
        if(miliSecond < 10){
            msString = "0" + msString
        }

        document.getElementById('hr').innerHTML = hrString
        document.getElementById('min').innerHTML = minString
        document.getElementById('sec').innerHTML = secString
        document.getElementById('ms').innerHTML = msString
        setTimeout(stopwatch, 10)
    }
}