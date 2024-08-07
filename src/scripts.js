document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.getElementById('share_button');
    const hideButton = document.getElementById('share_invert_button');
    const toggleDiv = document.querySelector('.floating_share');

    // Debugging logs
    console.log('Show Button:', showButton);
    console.log('Hide Button:', hideButton);
    console.log('Toggle Div:', toggleDiv);

    // Ensure the elements exist before attaching event listeners
    if (showButton && hideButton && toggleDiv) {
        showButton.addEventListener('click', () => {
            if (toggleDiv.style.display === 'none' || toggleDiv.style.display === '') {
                toggleDiv.style.display = 'block';
            }
        });

        hideButton.addEventListener('click', () => {
            if (toggleDiv.style.display === 'block') {
                toggleDiv.style.display = 'none';
            }
        });
    }
});
