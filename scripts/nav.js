document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if we are in the 'src' folder to fix links and images
    const inPagesFolder = window.location.pathname.includes('/src/');
    const prefix = inPagesFolder ? '../' : '';

    // 2. The Universal Navbar HTML (With Animated Hamburger)
    const navHTML = `
    <nav class="navbar">
        <div class="nav-container">
            <a href="${prefix}index.html" class="nav-logo">
                <img src="${prefix}assets/images/Ojas.png" alt="OJAS Logo" class="logo-img">
                <!--- <span class="logo-text">OJAS BIOFUEL.</span> --->
            </a>
            
            <label class="hamburger-menu">
                <input type="checkbox" id="mobile-menu-toggle">
                <div class="bar bar-top"></div>
                <div class="bar bar-mid"></div>
                <div class="bar bar-bot"></div>
            </label>

            <ul class="nav-links" id="nav-links-menu">
                <li><a href="${prefix}index.html">Home</a></li>
                
                <li class="dropdown">
                    <a href="#" class="dropbtn">About</a>
                    <ul class="dropdown-content">
                        <li><a href="${prefix}src/vision.html">Our Vision</a></li>
                        <li><a href="${prefix}src/team.html">Our Team</a></li>
                        <li><a href="${prefix}src/history.html">Company History</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropbtn">Projects</a>
                    <ul class="dropdown-content">
                        <li><a href="${prefix}src/projects.html#current">Current Projects</a></li>
                        <li><a href="${prefix}src/projects.html#completed">Completed Projects</a></li>
                        <li><a href="${prefix}src/projects.html#initiatives">Green Initiatives</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropbtn">Services</a>
                    <ul class="dropdown-content">
                        <li><a href="${prefix}src/services.html#agri-waste">Agri Waste Supply</a></li>
                        <li><a href="${prefix}src/services.html#biomass">Biomass Trading</a></li>
                        <li><a href="${prefix}src/services.html#distribution">Biofuel Distribution</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropbtn">Products</a>
                    <ul class="dropdown-content">
                        <li><a href="${prefix}src/fuel.html">Industrial Fuel</a></li>
                        <li><a href="${prefix}src/briquettes.html">Biomass Briquettes</a></li>
                        <li><a href="${prefix}src/pellets.html">Biomass Pellets</a></li>
                        <li><a href="${prefix}src/order.html">Order Online</a></li>
                    </ul>
                </li>

                <li><a href="${prefix}src/contact.html">Contact</a></li>
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

        // Toggle sliding menu
        if (mobileToggle && navLinksMenu) {
            mobileToggle.addEventListener('change', function() {
                if (this.checked) {
                    navLinksMenu.classList.add('active');
                    document.body.style.overflow = 'hidden'; // Prevent background scrolling
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
                    e.preventDefault(); // Prevent jump to top
                    dropdown.classList.toggle('mobile-active');
                }
            });
        });
    }
});