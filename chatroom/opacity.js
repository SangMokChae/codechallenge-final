const bgScreen = document.getElementById("groupchatting");
const range = document.getElementById("jsRange");


function handleRangeChange(event) {
  const value = event.target.value;
  bgScreen.style.opacity = value;
}

if(range) {
  range.addEventListener("input", handleRangeChange);
}