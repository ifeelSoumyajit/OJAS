document.addEventListener('DOMContentLoaded', () => {
    // 1. The Universal Footer HTML (With Absolute Paths & Sitemap Modal)
    const footerHTML = `
    <style>
        /* Scoped styles for the new Sitemap Modal */
        .sitemap-grid-modal {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 30px;
            margin-top: 20px;
            text-align: left;
        }
        .sitemap-col h5 {
            font-size: 1.1rem;
            color: #2E7D32;
            margin-bottom: 10px;
            margin-top: 15px;
            border-bottom: 2px solid #e8f5e9;
            padding-bottom: 5px;
        }
        .sitemap-col h5:first-child { margin-top: 0; }
        .sitemap-col h5 a { color: inherit; text-decoration: none; }
        .sitemap-col ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .sitemap-col ul li { margin-bottom: 8px; font-size: 0.95rem; }
        .sitemap-col ul li a {
            color: #546E7A;
            text-decoration: none;
            transition: color 0.2s ease, padding-left 0.2s ease;
        }
        .sitemap-col ul li a:hover {
            color: #F57C00;
            padding-left: 5px;
        }
        .sitemap-btn {
            color: #2E7D32 !important;
            font-weight: 700;
            border: 1px solid #2E7D32;
            padding: 5px 10px;
            border-radius: 5px;
            display: inline-block;
            margin-top: 10px;
            transition: all 0.3s ease;
        }
        .sitemap-btn:hover {
            background: #2E7D32;
            color: #fff !important;
        }
    </style>

    <footer class="main-footer">
        <div class="container footer-grid">
            <div class="footer-brand">
                <h2 class="footer-logo">OJAS BIOFUEL. LLP</h2>
                <p>Transforming agricultural waste into </p>
                <p>clean energy for a sustainable future.</p>
            </div>
            
            <div class="footer-links">
                <h4>Explore</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="javascript:void(0)" id="open-sitemap" class="sitemap-btn"><i class="fa-solid fa-sitemap"></i> Sitemap</a></li>
                </ul>
            </div>

            <div class="footer-address">
                <h4>Headquarters</h4>
                <p>FL NO 03, CHINTAMANI NR MAHADEV MANDIR,<br>
                KHADAKWASLA, PUNE 411024</p>
                
                <div class="footer-legal-group">
                    <a href="javascript:void(0)" class="footer-legal-link" id="open-attributes">Attributes</a>
                    <span class="legal-divider">|</span>
                    <a href="/terms" class="footer-legal-link">Terms & Conditions</a>
                    <span class="legal-divider">|</span>
                    <a href="/policy" class="footer-legal-link">Privacy Policy</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <p>© 2026 OJAS BIOFUEL. LLP. All Rights Reserved.</p>
            </div>
        </div>

        <div id="attributes-modal" class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close" id="close-attributes">&times;</button>
                <h3>Credits & Attributes</h3>
                <hr>
                <div class="attributes-list">
                    <div class="attr-item resource-credits-box">
                        <strong>Resource Credits:</strong>
                        <p>To deliver a seamless and engaging digital experience, this platform leverages industry-leading third-party technologies. Our interface is crafted using typography from Google Fonts (Montserrat and Open Sans) alongside premium iconography from Font Awesome and Flaticon. For unique visual storytelling, all photography featured across the site is entirely self-conceived. Additionally, our geolocation and mapping services are securely powered by Google Maps.</p>
                    </div>
                    <div class="attr-item license-context">
                        <strong>Comprehensive License Details:</strong>
                        <p class="license-paragraph"><strong>© 2026 OJAS BIOFUEL. LLP. All Rights Reserved.</strong> This digital property is engineered utilizing a meticulous blend of proprietary development methodologies and open-source resources. The core UI/UX architecture, layout logic, and custom frontend codebase remain the exclusive intellectual property of OJAS Grp. & PIXEL DESIGNS., protected under applicable international copyright laws.</p>
                        <p class="license-paragraph">All visual assets, including the industrial and green energy photography featured throughout this platform, are 100% AI-generated. These generative media files are free from traditional copyright restrictions and are implemented under Creative Commons Zero (CC0) or equivalent public domain terms, permitting unrestricted commercial and personal application without mandatory attribution.</p>
                        <p class="license-paragraph">Typography is exclusively powered by the Google Fonts API and deployed under the SIL Open Font License (OFL). User interface iconography integrates assets from the Font Awesome Free License and Flaticon Basic License. Mapping services are provided by Google Maps APIs, subject to their respective terms of service.</p>
                    </div>
                    <div class="attr-item dev-signature">
                        <p class="engineered-text">Designed by</p>
                        <p class="dev-name">SOUMYAJIT MANDAL</p>
                        <a href="https://pixeldesigns.onrender.com" target="_blank" class="pixel-link">
                            PIXEL DESIGNS. <i class="fa-solid fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id="sitemap-modal" class="modal-overlay">
            <div class="modal-content" style="max-width: 800px;">
                <button class="modal-close" id="close-sitemap">&times;</button>
                <h3>Website Map</h3>
                <hr>
                <div class="sitemap-grid-modal">
                    <div class="sitemap-col">
                        <h5><a href="/">Home</a></h5>
                        
                        <h5><a href="/about">About Us</a></h5>
                        <ul>
                            <li><a href="/vision">Our Vision</a></li>
                            <li><a href="/team">Our Team</a></li>
                            <li><a href="/foundation">Company History</a></li>
                        </ul>
                    </div>
                    <div class="sitemap-col">
                        <h5><a href="/projects">Projects</a></h5>
                        <ul>
                            <li><a href="/current-projects">Current Projects</a></li>
                            <li><a href="/completed-projects">Completed Projects</a></li>
                            <li><a href="/initiatives">Green Initiatives</a></li>
                        </ul>
                        
                        <h5><a href="/services">Services</a></h5>
                        <ul>
                            <li><a href="/supply">Agri Waste Supply</a></li>
                            <li><a href="/trading">Biomass Trading</a></li>
                            <li><a href="/distribution">Biofuel Distribution</a></li>
                        </ul>
                    </div>
                    <div class="sitemap-col">
                        <h5><a href="/products">Products</a></h5>
                        <ul>
                            <li><a href="/fuel">Industrial Fuel</a></li>
                            <li><a href="/briquettes">Biomass Briquettes</a></li>
                            <li><a href="/pellets">Biomass Pellets</a></li>
                            <li><a href="/order">Order Online</a></li>
                        </ul>
                        
                        <h5>Support & Legal</h5>
                        <ul>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/terms">Terms & Conditions</a></li>
                            <li><a href="/policy">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;

        // --- Multi-Modal Logic ---
        const attrModal = document.getElementById('attributes-modal');
        const openAttrBtn = document.getElementById('open-attributes');
        const closeAttrBtn = document.getElementById('close-attributes');

        const sitemapModal = document.getElementById('sitemap-modal');
        const openSitemapBtn = document.getElementById('open-sitemap');
        const closeSitemapBtn = document.getElementById('close-sitemap');

        // Attributes Modal Handlers
        if (openAttrBtn && closeAttrBtn && attrModal) {
            openAttrBtn.onclick = () => {
                attrModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            };
            closeAttrBtn.onclick = () => {
                attrModal.classList.remove('show');
                document.body.style.overflow = 'auto';
            };
        }

        // Sitemap Modal Handlers
        if (openSitemapBtn && closeSitemapBtn && sitemapModal) {
            openSitemapBtn.onclick = () => {
                sitemapModal.classList.add('show');
                document.body.style.overflow = 'hidden';
            };
            closeSitemapBtn.onclick = () => {
                sitemapModal.classList.remove('show');
                document.body.style.overflow = 'auto';
            };
        }

        // Global Window Click Handler (closes whichever modal is active)
        window.onclick = (event) => {
            if (event.target == attrModal) {
                attrModal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
            if (event.target == sitemapModal) {
                sitemapModal.classList.remove('show');
                document.body.style.overflow = 'auto';
            }
        };
    }
});
