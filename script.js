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

    // Carousel functionality
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    function showNextItem() {
        items[currentItem].classList.remove('active');
        currentItem = (currentItem + 1) % items.length;
        items[currentItem].classList.add('active');
    }

    function showPrevItem() {
        items[currentItem].classList.remove('active');
        currentItem = (currentItem - 1 + items.length) % items.length;
        items[currentItem].classList.add('active');
    }

    document.querySelector('.carousel .next').addEventListener('click', showNextItem);
    document.querySelector('.carousel .prev').addEventListener('click', showPrevItem);

    setInterval(showNextItem, 3000); // Automatically change image every 3 seconds
});