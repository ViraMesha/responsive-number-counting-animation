const valueDisplays = document.querySelectorAll(".num");
const interval = 5000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  const endValue = parseInt(valueDisplay.getAttribute("data-val"));
  const duration = Math.floor(interval / endValue);
  const counter = setInterval(() => {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue === endValue) {
      clearInterval(counter);
    }
  }, duration);
});
