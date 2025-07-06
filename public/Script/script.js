// Add interactive form handling
const form = document.getElementById('feedbackForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', function(e) {
    // Add loading state (you can remove this if you want immediate submission)
    submitBtn.classList.add('loading');
    submitBtn.textContent = 'Sending...';
    
    // You can add actual form validation or AJAX submission here
    // For now, it will proceed with normal form submission
});

// Add focus animations to form inputs
const inputs = document.querySelectorAll('input, textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'translateY(-2px)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'translateY(0)';
    });
});

// Add floating label effect
inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value) {
            this.style.paddingTop = '24px';
            this.style.paddingBottom = '8px';
        } else {
            this.style.paddingTop = '16px';
            this.style.paddingBottom = '16px';
        }
    });
});