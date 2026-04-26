        document.addEventListener('DOMContentLoaded', () => {
            const tabBtns = document.querySelectorAll('.tab-btn');
            const tabPanes = document.querySelectorAll('.tab-pane');

            // Function to switch tabs and hide the others
            function switchTab(targetId) {
                // 1. Hide all panels and remove active states
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                // 2. Find the specific tab and panel that was clicked
                const targetBtn = document.querySelector(`.tab-btn[data-target="${targetId}"]`);
                const targetPane = document.getElementById(`pane-${targetId}`); // TARGETS THE NEW 'pane-' ID

                // 3. Only reveal the targeted details
                if (targetBtn && targetPane) {
                    targetBtn.classList.add('active');
                    targetPane.classList.add('active');
                }
            }

            // Listen for sidebar button clicks
            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const target = btn.getAttribute('data-target');
                    
                    // UPDATES THE URL WITHOUT JUMPING THE PAGE
                    history.pushState(null, null, `#${target}`);
                    
                    // Manually switch the tab since we prevented the hash jump
                    switchTab(target); 
                });
            });

            // Function to check the URL and switch tabs (for when users come from the Navbar)
            function handleUrlChange() {
                const hash = window.location.hash.substring(1); // Remove the '#'
                if (['vision', 'team', 'history'].includes(hash)) {
                    switchTab(hash);
                }
            }

            // 1. Run on initial page load
            handleUrlChange();

            // 2. Run whenever the user clicks a Navbar Dropdown link
            window.addEventListener('hashchange', handleUrlChange);
        });