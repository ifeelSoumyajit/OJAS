document.addEventListener('DOMContentLoaded', () => {
    // 1. Find the placeholder div
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        // 2. Determine the correct path to the footer file
        // If we are in the 'src/' folder, we need to go up one level ('../')
        const isSubPage = window.location.pathname.includes('/src/');
        const footerPath = isSubPage ? '../styles/components/footer.html' : 'styles/components/footer.html';

        // 3. Fetch the HTML file and inject it into the page
        fetch(footerPath)
            .then(response => {
                if (!response.ok) throw new Error('Footer not found');
                return response.text();
            })
            .then(data => {
                footerPlaceholder.innerHTML = data;
            })
            .catch(error => console.error('Error loading footer:', error));
    }
});