// Handle showing desktop color section when a color image is clicked
document.querySelectorAll('.linkedimg').forEach(image => {
    image.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        document.querySelector('#desktop-color-section').classList.add('active');
    });
});

// Handle color button clicks
document.querySelectorAll('.color-btn').forEach(button => {
    button.addEventListener('click', function() {
        const color = this.getAttribute('data-color');

        // Hide all text content
        document.querySelectorAll('.desktop-text-content').forEach(content => {
            content.classList.remove('active');
        });

        // Show the selected color's text content
        document.querySelector(`#desktop-${color}`).classList.add('active');
    });
});

// Handle closing or resetting the desktop section (optional)
document.querySelector('#desktop-color-section').addEventListener('click', function() {
    this.classList.remove('active');
});

