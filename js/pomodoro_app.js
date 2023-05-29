// Global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;

let workTime = 6;
let breakTime = 8;

// Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

// Update the timer
function timer () {
	seconds++;

	// Format our time
	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;

	time_el.innerText = `${mins}:${secs}`;

    workT = workTime;
    breakT = breakTime

    if(secs == workT){
        stop();
        seconds = 0;
        time_el.innerText = '00:00';
        secs = breakT
        start();
    } else if (secs == breakT) {
        stop();
        seconds = 0;
        time_el.innerText = '00:00';
        start();
        secs = workTime;
    }

    //let currState;

/*
    for(let i = 0; i < 1; i++){
        if (active = true){
            maxTime = workTime;
            if(secs = maxTime){
                stop();
                seconds = 0;
                time_el.innerText = '00:00';
                start();
                active = false;
                breakTime = true;
            }
        } else if(breakTime = true) {
            maxTime = (secs == 4);
            if(secs = maxTime){
                stop();
                seconds = 0;
                time_el.innerText = '00:00';
                start();
                active = true;
                breakTime = false;
            }
        }
    }
/*
    if(currState != 0){    
        if(secs == 6){
            currState = 0;
            stop();
            seconds = 0;
            time_el.innerText = '00:00';
            start();
            if(secs == 4){
                stop();
                seconds = 0;
                time_el.innerText = '00:00';
                start();
            }
        }
    }   */
}

function start () {
	if (interval) {
		return
	}
	interval = setInterval(timer, 1000);
}

function stop () {
	clearInterval(interval);
	interval = null;
}

function reset () {
	stop();
	seconds = 0;
	time_el.innerText = '00:00';
}