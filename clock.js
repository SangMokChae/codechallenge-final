const clock = document.querySelector(".status-bar"),
  clockTime = clock.querySelector("h1");

  function loadTimes() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    clockTime.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
  }

function init() {
  loadTimes();
  setInterval(loadTimes, 1000);
}
init();