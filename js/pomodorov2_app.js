let timerInterval;
let timeLeft;
let isPaused = false;
let pauseTime;

function startTimer() {
  // Disable the Start button
  document.getElementById("startBtn").disabled = true;

  // Set the initial time left to 25 minutes
  timeLeft = 25 * 60;

  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  // Re-enable the Start button
  document.getElementById("startBtn").disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  // Reset the time left to 25 minutes
  timeLeft = 25 * 60;
  isPaused = false;
  updateTimerDisplay();
  // Re-enable the Start button
  document.getElementById("startBtn").disabled = false;
}

function pauseTimer() {
  if (!isPaused) {
    isPaused = true;
    pauseTime = new Date();
    clearInterval(timerInterval);
  }
}

function resumeTimer() {
  if (isPaused) {
    isPaused = false;
    const now = new Date();
    const timeElapsed = now.getTime() - pauseTime.getTime();
    timeLeft -= Math.floor(timeElapsed / 1000);
    timerInterval = setInterval(updateTimer, 1000);
  }
}

function updateTimer() {
  if (!isPaused) {
    timeLeft--;
    if (timeLeft < 0) {
      if (timeLeft === -1) {
        alert("Time's up!");
      }
      if (timeLeft === -30) {
        // Set the time left to 5 minutes
        timeLeft = 5 * 60;
        alert("Take a 5-minute break!");
      }
      if (timeLeft === -35) {
        // Set the time left to 25 minutes
        timeLeft = 25 * 60;
        alert("Break's over! Let's get back to work.");
      }
    }
    updateTimerDisplay();
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const time = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById("timer").innerHTML = time;
}