document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================
       1. DYNAMIC FOOTER FETCH LOGIC
       ========================================== */
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        // Determine the correct path to the footer file
        // If we are in the 'src/' folder, we need to go up one level ('../')
        const isSubPage = window.location.pathname.includes('/src/');
        const footerPath = isSubPage ? '../styles/components/footer.html' : 'styles/components/footer.html';

        // Fetch the HTML file and inject it into the page
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


    /* ==========================================
       2. COOKIE CONSENT BANNER LOGIC
       ========================================== */
    // Determine the correct path for the Privacy Policy link
    const inPagesFolder = window.location.pathname.includes('/src/');
    const prefix = inPagesFolder ? '../' : '';

    // The HTML for the Cookie Banner
    const cookieHTML = `
        <div id="cookieConsent" class="cookie-banner">
            <p class="cookie-text">
                We use cookies to improve your experience on our site and to analyze web traffic. 
                By clicking "Accept", you consent to our use of cookies as described in our 
                <a href="${prefix}src/policy.html">Privacy Policy</a>.
            </p>
            <div class="cookie-buttons">
                <button id="declineCookies" class="cookie-btn decline">Decline</button>
                <button id="acceptCookies" class="cookie-btn accept">Accept</button>
            </div>
        </div>
    `;

    // Inject the banner into the body
    document.body.insertAdjacentHTML('beforeend', cookieHTML);

    const cookieBanner = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');

    // Check if the user has already made a choice
    // If there is NO record in localStorage, show the banner
    if (!localStorage.getItem('ojas_cookie_consent')) {
        // Add a slight delay for a smooth slide-in effect after page load
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000); 
    }

    // Handle Accept Click
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('ojas_cookie_consent', 'accepted');
            cookieBanner.classList.remove('show');
        });
    }

    // Handle Decline Click
    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            localStorage.setItem('ojas_cookie_consent', 'declined');
            cookieBanner.classList.remove('show');
        });
    }

});