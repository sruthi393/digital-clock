const clock = document.getElementById('clock');
const toggle = document.getElementById('toggle-mode');

function updateTime() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

setInterval(updateTime, 1000);
updateTime();
