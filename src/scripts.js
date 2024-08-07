document.addEventListener('DOMContentLoaded', () => {
    const showButton = document.getElementById('share_button');
    const hideMobileButton = document.getElementById('share_invert_button');
    const hideDesktopButton = document.getElementById('share_invert_outer_button');
    const toggleDiv = document.querySelector('.floating_share');

    // Debugging logs
    console.log('Show Button:', showButton);
    console.log('Hide Button:', hideMobileButton);
    console.log('Hide Button:', hideDesktopButton);
    console.log('Toggle Div:', toggleDiv);

    // Ensure the elements exist before attaching event listeners
    if (showButton && hideMobileButton && hideDesktopButton && toggleDiv) {
        showButton.addEventListener('click', () => {
            if (toggleDiv.style.display === 'none' || toggleDiv.style.display === '') {
                toggleDiv.style.display = 'block';
            }
        });

        hideMobileButton.addEventListener('click', () => {
            if (toggleDiv.style.display === 'block') {
                toggleDiv.style.display = 'none';
            }
        });

        hideDesktopButton.addEventListener('click', () => {
            if (toggleDiv.style.display === 'block') {
                toggleDiv.style.display = 'none';
            }
        });
    }
});
