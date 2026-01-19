================================================================================
GREEN TRUTH ACTIVIST WEBSITE
Cybersecurity Training Simulation
================================================================================

ABOUT THIS WEBSITE
------------------
This is a realistic activist group website designed for cybersecurity attack 
training simulations. It features a complete, professional design inspired by 
real activist movements like Extinction Rebellion.

Organization: Green Truth (fictional environmental activist group)
Purpose: Cybersecurity training and penetration testing scenarios
License: Creative Commons BY-SA 4.0 (for educational use)

================================================================================
DEPLOYMENT INSTRUCTIONS
================================================================================

REQUIREMENTS:
-------------
- Apache web server (or any standard HTTP server)
- No database required
- No server-side processing needed
- No build tools or compilation required

INSTALLATION STEPS:
-------------------

1. UPLOAD FILES TO SERVER
   Upload all files and folders to your Apache web server's document root
   (typically /var/www/html/ on Linux or htdocs/ on Windows/XAMPP)

   Required structure:
   /your-website-root/
   ├── index.html
   ├── about.html
   ├── campaigns.html
   ├── take-action.html
   ├── resources.html
   ├── /assets
   │   └── /images
   │       └── green-truth-logo.png
   ├── /css
   │   └── main.css
   └── /js
       └── main.js

2. VERIFY PERMISSIONS
   Ensure all files are readable by the web server:
   - chmod 644 for all .html, .css, .js files
   - chmod 755 for all directories
   - chmod 644 for all images

3. TEST THE WEBSITE
   Open your web browser and navigate to:
   http://your-domain.com/
   
   or if deployed in a subdirectory:
   http://your-domain.com/green-truth/

4. DONE!
   The website should load immediately. No additional configuration needed.

================================================================================
TECHNICAL SPECIFICATIONS
================================================================================

TECHNOLOGY STACK:
-----------------
- Pure HTML5 (semantic markup)
- Vanilla CSS3 (no frameworks)
- Vanilla JavaScript (no dependencies)
- Static files only - compatible with any web server

BROWSER COMPATIBILITY:
----------------------
✓ Chrome/Chromium (latest)
✓ Firefox (latest)
✓ Safari (latest)
✓ Microsoft Edge (latest)
✓ Mobile browsers (iOS Safari, Chrome Mobile)

RESPONSIVE DESIGN:
------------------
✓ Mobile: < 768px
✓ Tablet: 768px - 1024px
✓ Desktop: > 1024px

FILE SIZES:
-----------
Total package: ~200KB (excluding external images from CDN)
- HTML files: ~150KB total
- CSS: ~25KB
- JavaScript: ~5KB
- Logo: ~15KB

================================================================================
FEATURES & FUNCTIONALITY
================================================================================

PAGES:
------
1. index.html       - Homepage with hero, stats, featured campaigns
2. about.html       - Organization story, principles, operations
3. campaigns.html   - Active campaigns with progress tracking
4. take-action.html - Volunteer opportunities, donations, events
5. resources.html   - Downloadable materials and reports

INTERACTIVE FEATURES:
---------------------
✓ Sticky navigation header
✓ Mobile hamburger menu
✓ Smooth scroll navigation
✓ Animated statistics counter
✓ Newsletter form submission (client-side alert)
✓ Contact form (static - no backend)
✓ Responsive card hover effects

DESIGN ELEMENTS:
----------------
✓ Bold activist aesthetic (rebellion.global inspired)
✓ High-contrast color scheme
✓ Strong typography hierarchy
✓ Consistent components across pages
✓ Professional, credible appearance

================================================================================
CUSTOMIZATION
================================================================================

TO MODIFY COLORS:
-----------------
Edit /css/main.css and change CSS variables at the top:
  --color-primary: #00b050;      (main green)
  --color-primary-dark: #008c3d; (darker green)
  --color-accent: #ffcc00;       (warning yellow)

TO CHANGE CONTENT:
------------------
Edit the HTML files directly. All content is in plain HTML with semantic
markup. No build process required.

TO ADD IMAGES:
--------------
1. Place images in /assets/images/
2. Update <img> tags in HTML files
3. For external images, replace Unsplash URLs with your own

TO MODIFY LAYOUT:
-----------------
Edit /css/main.css. The design system uses:
- CSS Grid for layouts
- Flexbox for components
- CSS custom properties for theming
- Mobile-first responsive approach

================================================================================
TROUBLESHOOTING
================================================================================

ISSUE: Images not loading
FIX: Check file paths are relative and files exist in /assets/images/

ISSUE: Styles not applied
FIX: Verify /css/main.css is linked correctly in all HTML files

ISSUE: Mobile menu not working
FIX: Ensure /js/main.js is loaded before closing </body> tag

ISSUE: Layout broken on mobile
FIX: Clear browser cache and test in incognito mode

ISSUE: Forms not submitting
FIX: This is intentional - forms are static for training purposes

================================================================================
SECURITY NOTES (FOR TRAINING SCENARIOS)
================================================================================

This website is intentionally designed for penetration testing and includes:
- Static forms (no server-side validation)
- No authentication system
- No database connections
- Simulated download links
- Educational content disclaimers

Common attack vectors to test:
- XSS injection in forms
- Path traversal attempts
- CSRF attacks
- Social engineering scenarios
- Phishing simulations

================================================================================
SUPPORT & DOCUMENTATION
================================================================================

For questions or issues deploying this training website:

Website uses standard web technologies - consult:
- MDN Web Docs (developer.mozilla.org)
- Apache documentation (httpd.apache.org)
- W3C Web Standards (w3.org)

================================================================================
LICENSE
================================================================================

This website is released under Creative Commons BY-SA 4.0
For educational and training purposes only.

Attribution: Green Truth (Fictional Organization)
Created: January 2026
Version: 1.0

================================================================================
DISCLAIMER
================================================================================

This is a simulated website created for cybersecurity training purposes only.
Green Truth is a fictional organization. Any resemblance to real organizations
is coincidental. All campaign information and news items are fabricated.

Not intended for public use or to represent actual activist movements.

================================================================================
