document.addEventListener('DOMContentLoaded', () => {
    // 1. The Universal Navbar HTML (With Animated Hamburger)
    // Absolute paths pointed exactly to where the subpage files exist on your server
    const navHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="/Home" class="nav-logo" oncontextmenu="return false;">
                <img src="/assets/images/Ojas.png" alt="OJAS Logo" class="logo-img">
            </a>
            
            <label class="hamburger-menu">
                <input type="checkbox" id="mobile-menu-toggle">
                <div class="bar bar-top"></div>
                <div class="bar bar-mid"></div>
                <div class="bar bar-bot"></div>
            </label>

            <ul class="nav-links" id="nav-links-menu">
                <li><a href="/Home">Home</a></li>
                
                <li class="dropdown">
                    <a href="#" class="dropbtn">About</a>
                    <ul class="dropdown-content">
                        <li><a href="/in/vision">Our Vision</a></li>
                        <li><a href="/in/team">Our Team</a></li>
                        <li><a href="/in/foundation">Company History</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropbtn">Projects</a>
                    <ul class="dropdown-content">
                        <li><a href="/in/current-projects">Current Projects</a></li>
                        <li><a href="/in/completed-projects">Completed Projects</a></li>
                        <li><a href="/in/initiatives">Green Initiatives</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropbtn">Services</a>
                    <ul class="dropdown-content">
                        <li><a href="/in/supply">Agri Waste Supply</a></li>
                        <li><a href="/in/trading">Biomass Trading</a></li>
                        <li><a href="/in/distribution">Biofuel Distribution</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropbtn">Products</a>
                    <ul class="dropdown-content">
                        <li><a href="/in/fuel">Industrial Fuel</a></li>
                        <li><a href="/in/briquettes">Biomass Briquettes</a></li>
                        <li><a href="/in/pellets">Biomass Pellets</a></li>
                        <li><a href="/in/order">Order Online</a></li>
                    </ul>
                </li>

                <li><a href="/in/contact">Contact</a></li>
            </ul>
        </div>
    </nav>
    `;

    // 2. Inject the navbar into the page
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        navPlaceholder.innerHTML = navHTML;

        // 3. Mobile Menu & Dropdown Logic
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const navLinksMenu = document.getElementById('nav-links-menu');
        const dropdowns = document.querySelectorAll('.dropdown');

        // --- NEW RESET LOGIC ---
        const closeMenu = () => {
            if (mobileToggle) mobileToggle.checked = false; 
            if (navLinksMenu) navLinksMenu.classList.remove('active'); 
            document.body.style.overflow = 'auto'; 
            
            dropdowns.forEach(drop => drop.classList.remove('mobile-active'));
        };

        closeMenu();

        window.addEventListener('pageshow', (event) => {
            if (event.persisted) {
                closeMenu();
            }
        });

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
});
