const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const dateDisplay = document.querySelector('.date-display');
const timeZoneSelect = document.getElementById('timeZoneSelect');

function updateTime() {
    let currentTime = new Date();
    const timeZone = timeZoneSelect.value === 'Local' ? Intl.DateTimeFormat().resolvedOptions().timeZone : timeZoneSelect.value;
    currentTime = new Date(new Date().toLocaleString('en-US', {timeZone: timeZone}));
    
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}


// Event listener for the select element
timeZoneSelect.addEventListener('change', updateTime);

// Set interval to update clock every second
setInterval(updateTime, 1000);

// Update immediately on page load
updateTime();
