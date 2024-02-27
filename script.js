let timer;
let timerRunning = false;
let seconds = 0;

function showTimer() {
    document.getElementById('timer-container').classList.remove('hidden');
}

function startTimer() {
    if (!timerRunning) {
        timerRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function stopTimer() {
    clearInterval(timer);
    timerRunning = false;
}

function resetTimer() {
    stopTimer();
    seconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    seconds++;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    document.getElementById('timer').innerText = `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

function hideTimer() {
    document.getElementById('timer-container').classList.add('hidden');
    stopTimer();
}