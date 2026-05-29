document.addEventListener('DOMContentLoaded', () => {
    const folderOpenSVG = `<svg class="folder-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 2H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"></path><path d="M2 10h20"></path></svg>`;
    
    const fileSVG = `<svg class="file-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`;

    const footerHTML = `
    <footer class="premium-footer">
        <div class="container">
            <div class="floating-cta">
                <div class="cta-content">
                    <h2>Ready to fuel a sustainable future?</h2>
                    <p>Partner with Ojas Biofuel for high-calorific, zero-carbon green energy solutions.</p>
                </div>
                <div class="cta-action">
                    <a href="/in/contact" class="btn-glow">Get a Quote <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>

        <div class="container footer-grid-modern">
            <div class="footer-brand-modern">
                <h2 class="footer-logo-glow">OJAS BIOFUEL. LLP</h2>
                <p class="brand-tagline">Transforming agricultural waste into clean energy for a sustainable future.</p>
                <div class="social-pills">
                    <a href="javascript:void(0)" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
                    <a href="javascript:void(0)" aria-label="Twitter"><i class="fa-brands fa-twitter"></i></a>
                    <a href="javascript:void(0)" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                </div>
            </div>
            
            <div class="footer-links-modern">
                <div class="sitemap-grid-modern tree-hierarchy">
                    <div class="sitemap-group-modern">
                        <h5>${folderOpenSVG} <a href="/in/about">About Us</a></h5>
                        <ul class="tree-branch">
                            <li><a href="/in/vision">${fileSVG} Our Vision</a></li>
                            <li><a href="/in/team">${fileSVG} Our Team</a></li>
                            <li><a href="/in/foundation">${fileSVG} History</a></li>
                        </ul>
                    </div>

                    <div class="sitemap-group-modern">
                        <h5>${folderOpenSVG} <a href="/in/projects">Projects</a></h5>
                        <ul class="tree-branch">
                            <li><a href="/in/current-projects">${fileSVG} Current</a></li>
                            <li><a href="/in/completed-projects">${fileSVG} Completed</a></li>
                            <li><a href="/in/initiatives">${fileSVG} Initiatives</a></li>
                        </ul>
                    </div>

                    <div class="sitemap-group-modern">
                        <h5>${folderOpenSVG} <a href="/in/services">Services</a></h5>
                        <ul class="tree-branch">
                            <li><a href="/in/supply">${fileSVG} Agri Supply</a></li>
                            <li><a href="/in/trading">${fileSVG} Trading</a></li>
                            <li><a href="/in/distribution">${fileSVG} Distribution</a></li>
                        </ul>
                    </div>
                    
                    <div class="sitemap-group-modern">
                        <h5>${folderOpenSVG} <a href="/in/products">Products</a></h5>
                        <ul class="tree-branch">
                            <li><a href="/in/fuel">${fileSVG} Industrial Fuel</a></li>
                            <li><a href="/in/briquettes">${fileSVG} Briquettes</a></li>
                            <li><a href="/in/pellets">${fileSVG} Pellets</a></li>
                            <li><a href="/in/order">${fileSVG} Order Online</a></li>
                        </ul>
                    </div>

                    <div class="sitemap-group-modern">
                        <h5>${folderOpenSVG} Legal</h5>
                        <ul class="tree-branch">
                            <li><a href="javascript:void(0)" id="open-attributes">${fileSVG} Attributes</a></li>
                            <li><a href="/in/terms">${fileSVG} Terms & Conditions</a></li>
                            <li><a href="/in/policy">${fileSVG} Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-bottom-modern">
            <div class="container bottom-flex">
                <div class="hq-compact">
                    <i class="fa-solid fa-location-dot hq-icon"></i> 
                    <span>FL NO 03, CHINTAMANI NR MAHADEV MANDIR, KHADAKWASLA, PUNE 411024</span>
                </div>
                <div class="copyright-modern">
                    © 2026 OJAS BIOFUEL. LLP. All Rights Reserved.
                </div>
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
    </footer>
    `;

    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = footerHTML;

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
