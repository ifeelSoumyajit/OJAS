"document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if we are in the 'in' folder to fix links and images
    const inPagesFolder = window.location.pathname.includes('/in/');
    const prefix = inPagesFolder ? '../' : '';

    // 2. The Universal Navbar HTML (With Animated Hamburger)
    const navHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <!-- ADDED: oncontextmenu="return false;" to block right-clicks/long-presses -->
            <a href="${prefix}index" class="nav-logo" oncontextmenu="return false;">
                <img src="${prefix}assets/images/Ojas.png" alt="OJAS Logo" class="logo-img">
            </a>
            
            <label class="hamburger-menu">
                <input type="checkbox" id="mobile-menu-toggle">
                <div class="bar bar-top"></div>
                <div class="bar bar-mid"></div>
                <div class="bar bar-bot"></div>
            </label>

            <ul class="nav-links" id="nav-links-menu">
                <li><a href="${prefix}index">Home</a></li>
                
                <li class="dropdown">
                    <a href="#" class="dropbtn">About</a>
                    <ul class="dropdown-content">
                        <li><a href="${prefix}in/vision">Our Vision</a></li>
                        <li><a href="${prefix}in/team">Our Team</a></li>
                        <li><a href="${prefix}in/foundation">Company History</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropbtn">Projects</a>
                    <ul class="dropdown-content">
                        <li><a href="${prefix}in/current-projects">Current Projects</a></li>
                        <li><a href="${prefix}in/completed-projects">Completed Projects</a></li>
                        <li><a href="${prefix}in/initiatives">Green Initiatives</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropbtn">Services</a>
                    <ul class="dropdown-content">
                        <li><a href="${prefix}in/supply">Agri Waste Supply</a></li>
                        <li><a href="${prefix}in/trading">Biomass Trading</a></li>
                        <li><a href="${prefix}in/distribution">Biofuel Distribution</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropbtn">Products</a>
                    <ul class="dropdown-content">
                        <li><a href="${prefix}in/fuel">Industrial Fuel</a></li>
                        <li><a href="${prefix}in/briquettes">Biomass Briquettes</a></li>
                        <li><a href="${prefix}in/pellets">Biomass Pellets</a></li>
                        <li><a href="${prefix}in/order">Order Online</a></li>
                    </ul>
                </li>

                <li><a href="${prefix}in/contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    `;

    // 3. Inject the navbar into the page
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;

        // 4. Mobile Menu & Dropdown Logic
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const navLinksMenu = document.getElementById('nav-links-menu');
        const dropdowns = document.querySelectorAll('.dropdown');

        // --- NEW RESET LOGIC ---
        // Function to force-close the menu and reset the screen lock
        const closeMenu = () => {
            if (mobileToggle) mobileToggle.checked = false; // Changes 'X' back to Hamburger
            if (navLinksMenu) navLinksMenu.classList.remove('active'); // Hides the menu
            document.body.style.overflow = 'auto'; // Unlocks background scrolling
            
            // Closes any dropdowns that were left open
            dropdowns.forEach(drop => drop.classList.remove('mobile-active'));
        };

        // 1. Force close on initial load (just in case the browser cached the checked state)
        closeMenu();

        // 2. Force close when restoring from the Browser Back Button (BFCache)
        window.addEventListener('pageshow', (event) => {
            if (event.persisted) {
                closeMenu();
            }
        });

        // 3. Force close when any actual link is clicked (useful for mobile navigation)
        const allLinks = document.querySelectorAll('.nav-links a:not(.dropbtn)');
        allLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    closeMenu();
                }
            });
        });
        // --- END NEW RESET LOGIC ---


        // Toggle sliding menu normally
        if (mobileToggle && navLinksMenu) {
            mobileToggle.addEventListener('change', function() {
                if (this.checked) {
                    navLinksMenu.classList.add('active');
                    document.body.style.overflow = 'hidden'; 
                } else {
                    navLinksMenu.classList.remove('active');
                    document.body.style.overflow = 'auto';
                }
            });
        }

        // Handle dropdown clicks on mobile
        dropdowns.forEach(dropdown => {
            const dropbtn = dropdown.querySelector('.dropbtn');
            dropbtn.addEventListener('click', function(e) {
                if (window.innerWidth <= 992) {
                    e.preventDefault(); 
                    dropdown.classList.toggle('mobile-active');
                }
            });
        });
    }
});"
