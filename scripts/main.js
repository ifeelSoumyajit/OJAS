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
       3. LIGHT / DARK THEME MANAGEMENT ENGINE (WITH IMAGE SWAPPING)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    
    if (themeToggleBtn) {
        const themeIcon = themeToggleBtn.querySelector('i');
        // Selects the diagram image element if it exists on the current page
        const processImg = document.querySelector('.process-img');
        
        // Function to apply the dark theme states and adjust metrics
        const enableDarkTheme = () => {
            document.body.classList.add('dark-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            // UPDATED: Swap to the dark mode optimized diagram asset if present
            if (processImg) {
                processImg.src = 'assets/images/processBG.png';
            }
            localStorage.setItem('ojas_active_theme', 'dark');
        };

        // Function to remove dark theme metrics and drop back to base levels
        const disableDarkTheme = () => {
            document.body.classList.remove('dark-theme');
            if (themeIcon) {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
            }
            // UPDATED: Swap back to the clean light mode original asset
            if (processImg) {
                processImg.src = 'assets/images/Process.png';
            }
            localStorage.setItem('ojas_active_theme', 'light');
        };

        // Boot-Up Sync check: Initialize chosen profile from storage immediately on page load
        const preservedThemeSetting = localStorage.getItem('ojas_active_theme');
        if (preservedThemeSetting === 'dark') {
            enableDarkTheme();
        } else {
            disableDarkTheme();
        }

        // Active State Event click listener
        themeToggleBtn.addEventListener('click', () => {
            const currentModeIsDark = document.body.classList.contains('dark-theme');
            if (currentModeIsDark) {
                disableDarkTheme();
            } else {
                enableDarkTheme();
            }
        });
    }

});
