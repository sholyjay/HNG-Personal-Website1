document.addEventListener('DOMContentLoaded', () => {
    // Function to update the current UTC time
    function updateUTCTime() {
        const utcTimeElement = document.getElementById('utc-time');
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4]; // Extracts the time part
        utcTimeElement.textContent = utcTime;
    }

    // Function to display the current day of the week
    function updateCurrentDay() {
        const currentDayElement = document.getElementById('current-day');
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getUTCDay()]; // Get the day in UTC
        currentDayElement.textContent = currentDay;
    }

    // Initial update
    updateUTCTime();
    updateCurrentDay();

    // Update time every second
    setInterval(updateUTCTime, 1000);
});