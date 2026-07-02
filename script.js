const targetDate = new Date(2026, 11, 18, 0, 0, 0).getTime(); 

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;
  if (difference < 0) {
        document.querySelector('.countdown-container').innerHTML = "<h1>NOW IN DOOMS DAY</h1>";
        clearInterval(countdownInterval);
        return;
    }
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
  }
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
