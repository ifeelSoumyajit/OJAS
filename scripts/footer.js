document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
    <footer class="main-footer">
        <div class="container footer-grid-wrapper">
            <div class="footer-brand">
                <h2 class="footer-logo">OJAS BIOFUEL. LLP</h2>
                <p>Transforming agricultural waste into </p>
                <p>clean energy for a sustainable future.</p>
            </div>
            
            <div class="footer-links">
                <h4 style="color: #ffffff; font-weight: bold; margin-bottom: 20px;">Sitemap Explorer</h4>
                
                <div class="sitemap-grid">
                    
                    <div class="sitemap-group">
                        <h5><a href="/about">About Us</a></h5>
                        <ul>
                            <li><a href="/vision">Our Vision</a></li>
                            <li><a href="/team">Our Team</a></li>
                            <li><a href="/foundation">History</a></li>
                        </ul>
                    </div>

                    <div class="sitemap-group">
                        <h5><a href="/projects">Projects</a></h5>
                        <ul>
                            <li><a href="/current-projects">Current</a></li>
                            <li><a href="/completed-projects">Completed</a></li>
                            <li><a href="/initiatives">Initiatives</a></li>
                        </ul>
                    </div>

                    <div class="sitemap-group">
                        <h5><a href="/services">Services</a></h5>
                        <ul>
                            <li><a href="/supply">Agri Supply</a></li>
                            <li><a href="/trading">Trading</a></li>
                            <li><a href="/distribution">Distribution</a></li>
                        </ul>
                    </div>
                    
                    <div class="sitemap-group">
                        <h5><a href="/products">Products</a></h5>
                        <ul>
                            <li><a href="/fuel">Industrial Fuel</a></li>
                            <li><a href="/briquettes">Briquettes</a></li>
                            <li><a href="/pellets">Pellets</a></li>
                            <li><a href="/order">Order Online</a></li>
                        </ul>
                    </div>

                </div>
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
                        <p>
                            To deliver a seamless and engaging digital experience, this platform leverages industry-leading third-party technologies. 
                            Our interface is crafted using typography from Google Fonts (Montserrat and Open Sans) alongside premium iconography from Font 
                            Awesome and Flaticon. For unique visual storytelling, all photography featured across the site is entirely self-conceived. 
                            Additionally, our geolocation and mapping services are securely powered by Google Maps.
                        </p>
                    </div>

                    <div class="attr-item license-context">
                        <strong>Comprehensive License Details:</strong>
                        <p class="license-paragraph">
                            <strong>© 2026 OJAS BIOFUEL. LLP. All Rights Reserved.</strong> This digital property is engineered utilizing a meticulous blend of proprietary 
                            development methodologies and open-source resources. The core UI/UX architecture, layout logic, and custom frontend codebase remain the exclusive 
                            intellectual property of OJAS Grp. & PIXEL DESIGNS., protected under applicable international copyright laws.
                        </p>
                        <p class="license-paragraph">
                            All visual assets, including the industrial and green energy photography featured throughout this platform, are 100% AI-generated. These generative 
                            media files are free from traditional copyright restrictions and are implemented under Creative Commons Zero (CC0) or equivalent public domain terms, 
                            permitting unrestricted commercial and personal application without mandatory attribution.
                        </p>
                        <p class="license-paragraph">
                            Typography is exclusively powered by the Google Fonts API and deployed under the SIL Open Font License (OFL). User interface iconography integrates 
                            assets from the Font Awesome Free License and Flaticon Basic License. Mapping services are provided by Google Maps APIs, subject to their respective 
                            terms of service.
                        </p>
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
    </footer>
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;

        // Modal Logic
        const modal = document.getElementById('attributes-modal');
        const openBtn = document.getElementById('open-attributes');
        const closeBtn = document.getElementById('close-attributes');

        if (openBtn && closeBtn && modal) {
            openBtn.onclick = () => {
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            };

            closeBtn.onclick = () => {
                modal.classList.remove('show');
                document.body.style.overflow = 'auto';
            };

            window.onclick = (event) => {
                if (event.target == modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = 'auto';
                }
            };
        }
    }
});
