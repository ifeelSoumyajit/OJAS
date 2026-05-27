/* ==========================================================================
   GLOBAL THEME SYNCHRONIZATION ENGINE
   (Executes instantly on every page load to completely block white flashes)
   ========================================================================== */
(function() {
    // Read the saved user preference out of the shared browser localStorage vault
    const preservedThemeSetting = localStorage.getItem('ojas_active_theme');
    if (preservedThemeSetting === 'dark') {
        document.body.classList.add('dark-theme');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================
       1. DYNAMIC FOOTER FETCH LOGIC
       ========================================== */
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (footerPlaceholder) {
        const isSubPage = window.location.pathname.includes('/in/');
        const footerPath = isSubPage ? '../styles/components/footer.html' : 'styles/components/footer.html';

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
    const inPagesFolder = window.location.pathname.includes('/in/');
    const prefix = inPagesFolder ? '../' : '';

    const cookieHTML = `
        <div id="cookieConsent" class="cookie-banner">
            <p class="cookie-text">
                We use cookies to improve your experience on our site and to analyze web traffic. 
                By clicking "Accept", you consent to our use of cookies as described in our 
                <a href="${prefix}in/policy.html">Privacy Policy</a>.
            </p>
            <div class="cookie-buttons">
                <button id="declineCookies" class="cookie-btn decline">Decline</button>
                <button id="acceptCookies" class="cookie-btn accept">Accept</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', cookieHTML);

    const cookieBanner = document.getElementById('cookieConsent');
    const acceptBtn = document.getElementById('acceptCookies');
    const declineBtn = document.getElementById('declineCookies');

    if (!localStorage.getItem('ojas_cookie_consent')) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000); 
    }

    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => {
            localStorage.setItem('ojas_cookie_consent', 'accepted');
            cookieBanner.classList.remove('show');
        });
    }

    if (declineBtn) {
        declineBtn.addEventListener('click', () => {
            localStorage.setItem('ojas_cookie_consent', 'declined');
            cookieBanner.classList.remove('show');
        });
    }


    /* ==========================================================================
       3. LIGHT / DARK THEME TOGGLE CONTROLLER (MINIMALIST FLOATING FAB)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');
        
        const enableDarkTheme = () => {
            document.body.classList.add('dark-theme');
            if (themeIcon) {
                themeIcon.className = 'fa-solid fa-sun'; // Switch to crisp Sun icon
            }
            localStorage.setItem('ojas_active_theme', 'dark');
        };

        const disableDarkTheme = () => {
            document.body.classList.remove('dark-theme');
            if (themeIcon) {
                themeIcon.className = 'fa-solid fa-moon'; // Switch to clean Moon icon
            }
            localStorage.setItem('ojas_active_theme', 'light');
        };

        // Sync the action button graphic immediately based on early initialization status
        // This makes sure if you land on an "/in/" subpage, the button matches the active theme!
        if (document.body.classList.contains('dark-theme')) {
            if (themeIcon) themeIcon.className = 'fa-solid fa-sun';
        } else {
            if (themeIcon) themeIcon.className = 'fa-solid fa-moon';
        }

        // Bulletproof click execution listener
        themeToggleBtn.addEventListener('click', () => {
            if (document.body.classList.contains('dark-theme')) {
                disableDarkTheme();
            } else {
                enableDarkTheme();
            }
        });
    }

});
