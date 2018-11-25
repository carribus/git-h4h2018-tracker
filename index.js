const MS_PER_DAY = 1000 * 60 * 60 * 24
const MS_PER_HOUR = 1000 * 60 * 60;
const MS_PER_MINUTE = 1000 * 60;
const periodFromMS = (ms, periodSize) => Math.floor(ms / periodSize);

window.addEventListener('load', () => {
    console.log("Page laoded");
    const timers = document.getElementsByClassName("countdown_timer");
    const startTimers = (timers) => {
        for (let timer of timers) {
            const d = new Date(timer.dataset.date);
            console.log(d);
            window.setInterval(() => {
                const now = Date.now();
                let diff = d - now;
                let days = periodFromMS(diff, MS_PER_DAY); 
                diff -= days * MS_PER_DAY;
                let hours = periodFromMS(diff, MS_PER_HOUR);
                diff -= hours * MS_PER_HOUR;
                let minutes = periodFromMS(diff, MS_PER_MINUTE);
                diff -= minutes * MS_PER_MINUTE;
                let seconds = periodFromMS(diff, 1000);

                // timer.innerText = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
                timer.innerText = `${days} days, ${hours} hours, ${minutes} minutes`;
            }, 1000)
        }
    }

    startTimers(timers);

});