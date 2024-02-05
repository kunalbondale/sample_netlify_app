function updateClock() {
    const now = new Date();
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
  
    const date = now.toLocaleDateString('en-US', dateOptions);
    const time = now.toLocaleTimeString('en-US', timeOptions);
  
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${date} | ${time}`;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to set the clock immediately
  updateClock();
  