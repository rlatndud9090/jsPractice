// Set up the time
export const updateTime = () => {
  const hourElement = document.querySelector('.hour');
  const minuteElement = document.querySelector('.minute');
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  if (currentHour > 12) {
    currentHour -= 12;
  }
  if (hourElement) {
    hourElement.textContent = currentHour.toString();
  }
  if (minuteElement) {
    minuteElement.textContent = currentMinute.toString().padStart(2, '0');
  }
  requestAnimationFrame(updateTime);
};