// Auto-redirect functionality
let countdown = 10;
const countdownElement = document.getElementById('countdown');
const timerElement = document.getElementById('timer');

function updateCountdown() {
    countdown--;
    countdownElement.textContent = countdown;
    
    if (countdown <= 0) {
        window.location.href = '/'; // Redirect to home page
    }
}

// Start countdown
const countdownInterval = setInterval(updateCountdown, 1000);

// Allow user to cancel auto-redirect by interacting with the page
document.addEventListener('click', () => {
    clearInterval(countdownInterval);
    timerElement.style.display = 'none';
});

document.addEventListener('keydown', () => {
    clearInterval(countdownInterval);
    timerElement.style.display = 'none';
});

function submitAnother() {
    clearInterval(countdownInterval);
    window.location.href = '/'; // Redirect to feedback form
}

// Add some extra flair with random stats animation
const statNumbers = document.querySelectorAll('.stat-number');
statNumbers.forEach((stat, index) => {
    const finalValue = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
    let currentValue = 0;
    const increment = finalValue / 30;
    
    setTimeout(() => {
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(timer);
            }
            
            if (stat.textContent.includes('%')) {
                stat.textContent = Math.floor(currentValue) + '%';
            } else {
                stat.textContent = Math.floor(currentValue).toLocaleString();
            }
        }, 50);
    }, 1500 + (index * 200));
});