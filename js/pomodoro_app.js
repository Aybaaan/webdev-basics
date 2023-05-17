// Global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;

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

    let currState = 0;

    if(currState === 0){    
        if(secs == 6){
            stop();
            seconds = 0;
            time_el.innerText = '00:00';
            currState += 1;
            start();
        }
    } else if (currState != 0){
        if(secs == 4){
            stop();
            seconds = 0;
            time_el.innerText = '00:00';
            currState = 0;
            start();
        }
    }
    return(seconds);
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

function reset_pomodoro() {
    var secs = timer();
    if(secs == 5){
        stop();
        seconds = 0;
        time_el.innerText = '00:00';
    }
}

function reset () {
	stop();
	seconds = 0;
	time_el.innerText = '00:00';
}