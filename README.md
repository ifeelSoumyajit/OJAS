# OJAS Website – Project Documentation

## 📌 Overview

OJAS is a static multi-page website built using HTML, CSS, and JavaScript. The project follows a modular structure with separation of concerns across layout, components, scripts, and assets.

---

## 📁 Folder Structure

```
OJAS/
│
├── index.html                  # Homepage
│
├── pages/                      # All internal pages
│   ├── about.html
│   ├── contact.html
│   ├── products.html
│   ├── projects.html
│   ├── services.html
│   └── order.html
│
├── styles/                     # CSS stylesheets
│   ├── base.css               # Global styles (typography, resets)
│   ├── layout.css             # Layout system (grid, sections)
│   ├── about.css              # About page styles
│   ├── contact.css            # Contact page styles
│   ├── order.css              # Order page styles
│   │
│   └── components/            # Reusable UI components
│       ├── navbar.css
│       └── footer.css
│
├── scripts/                    # JavaScript logic
│   ├── main.js                # Core site functionality
│   ├── nav.js                 # Navbar behavior (likely dynamic injection or toggling)
│   ├── footer.js              # Footer rendering logic
│   └── about.js               # About page-specific interactions
│
├── assets/                     # Media files
│   ├── images/
│   │   ├── Banner.jpg
│   │   ├── OJAS_LOGO.png
│   │   ├── Process.png
│   │   └── other generated images
│   │
│   └── videos/
│       └── Banner.mp4
│
└── __MACOSX/                   # System-generated (can be ignored)
```

---

## 🧩 Website Components

### 1. Core Pages

#### `index.html`

* Entry point of the website
* Likely includes:

  * Hero section (banner/video)
  * Navigation bar
  * Overview sections (services/products/projects)
  * Footer

#### Other Pages (`/pages`)

Each page is dedicated to a specific domain:

* **about.html**

  * Company/project introduction
  * Enhanced by `about.js`

* **contact.html**

  * Contact form or details
  * Styled via `contact.css`

* **products.html**

  * Product listings or catalog

* **services.html**

  * Description of services offered

* **projects.html**

  * Portfolio or previous work

* **order.html**

  * Likely includes order form or workflow

---

### 2. Styling System

#### Global Styles

* `base.css`

  * Resets, fonts, typography, colors

* `layout.css`

  * Grid system, spacing, section layouts

#### Page-Specific Styles

* Dedicated CSS files for each page (e.g., `about.css`, `contact.css`)
* Helps isolate styling and avoid conflicts

#### Component Styles

Located in `styles/components/`:

* `navbar.css`
* `footer.css`

These define reusable UI elements across all pages.

---

### 3. JavaScript Architecture

#### `main.js`

* Handles global functionality
* Possible roles:

  * Event listeners
  * Initialization logic
  * General DOM manipulation

#### `nav.js`

* Controls navigation bar behavior
* Likely features:

  * Dynamic navbar injection
  * Mobile menu toggle
  * Active link highlighting

#### `footer.js`

* Dynamically renders footer across pages
* Avoids duplication of footer HTML

#### `about.js`

* Page-specific logic for About page
* Could include:

  * Animations
  * Interactive sections

---

### 4. Assets

#### Images

* Branding (logo)
* Banners
* Process diagrams

#### Videos

* Banner video (`Banner.mp4`) likely used in homepage hero section

---

## ⚙️ Design Approach

### ✔ Modular Structure

* Separation of:

  * Content (HTML)
  * Presentation (CSS)
  * Behavior (JS)

### ✔ Reusability

* Navbar and footer handled via JS → avoids duplication

### ✔ Scalability

* Easy to add new pages or components

---

## ⚠️ Observations & Improvements (Critical Review)

### 1. Redundant Files

* `.DS_Store` and `__MACOSX` should be removed
* These are unnecessary and clutter the project

### 2. No Framework Usage

* Pure HTML/CSS/JS → simple but:

  * Harder to scale for large applications
  * No state management

### 3. Component Injection via JS

Assumption:

* Navbar/Footer are injected dynamically

**Potential Issue:**

* SEO impact (content not visible immediately)
* Slower initial render

**Alternative:**

* Use templating (e.g., EJS, React, or static site generators)

### 4. No Build System

* No bundler (Webpack/Vite)
* No minification or optimization

### 5. Asset Naming

* Some image names are auto-generated (e.g., "ChatGPT Image...")
* Should be standardized for maintainability

---

## 🚀 Suggested Enhancements

* Introduce a framework (React / Next.js)
* Add a build tool (Vite/Webpack)
* Optimize images and videos
* Implement responsive design checks
* Add form validation (if not present)
* Improve folder naming consistency

---

## 📌 Conclusion

The OJAS project is a well-structured static website with clear modular separation. It demonstrates good foundational practices, especially in component reuse and styling organization. However, scalability, optimization, and modern tooling can significantly improve the project’s robustness and maintainability.

---
