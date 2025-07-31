console.log("Page Loaded!");
const countdown = () => {
  const endDate = new Date("August 15, 2025 09:00:00").getTime();
  const now = new Date().getTime();
  const gap = endDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
};

setInterval(countdown, 1000);
