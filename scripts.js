document.addEventListener('DOMContentLoaded', (event) => {
    // Example: Dynamic greeting based on time of day
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = 'Good morning!';
    } else if (hour < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
    
    // Example: Toggle visibility of a section
    const toggleButton = document.getElementById('toggle-button');
    const toggleSection = document.getElementById('toggle-section');

    if (toggleButton && toggleSection) {
        toggleButton.addEventListener('click', () => {
            if (toggleSection.style.display === 'none') {
                toggleSection.style.display = 'block';
            } else {
                toggleSection.style.display = 'none';
            }
        });
    }
});
