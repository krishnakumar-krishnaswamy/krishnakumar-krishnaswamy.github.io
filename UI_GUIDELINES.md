# Portfolio UI Guidelines

## Purpose

This document defines the user interface standards for the portfolio website.

The objective is to maintain a clean, professional, executive-style interface that emphasizes content over decoration while providing a consistent user experience across future enhancements.

---

# UI Reference

The approved Version 1 interface is documented in:

* `UI_MOCKUP_V1.png`

The mockup serves as the visual reference.

This document remains the implementation standard.

---

# Design Philosophy

The portfolio shall present a clean, modern, executive appearance.

Core principles:

* Minimalistic
* Professional
* Content-first
* Consistent
* Fast loading
* Accessible
* Responsive

The interface should resemble a modern enterprise application rather than a creative portfolio template.

---

# Layout

## Left Panel

Contains:

* Profile image
* Full name
* Parent navigation
* Child navigation
* Social links

## Right Panel

Contains:

* Dynamic content rendering
* Single content card
* Rounded corners
* Soft shadow
* Center-aligned content

---

# Color Palette

## Application Background

Very light neutral gray.

No gradients.

No textured backgrounds.

## Sidebar

Neutral gray matching the application theme.

## Content Card

White.

Rounded corners.

Soft shadow.

## Accent

Accent colors shall only be used for:

* Selected navigation item
* Hyperlinks
* Buttons

Avoid decorative colors.

---

# Typography

Use the browser system font stack.

Typography should follow a modern enterprise appearance.

Guidelines:

* Normal font weight
* No bold navigation text
* Consistent font sizing
* Clear spacing

Visual hierarchy should be achieved through spacing rather than excessive font weights.

---

# Navigation

Each parent navigation item includes an icon.

Each child navigation item includes a smaller matching icon.

Selected child item:

* Highlight background
* Left accent indicator

Selected parent remains highlighted while any child is active.

Only one child item may remain active at any time.

---

# Profile

Display:

* Profile image
* KrishnaKumar Krishnaswamy

Display the full name on a single line.

Profile image:

`assets/images/profile.png`

The profile image shall be replaceable without requiring HTML, CSS, or JavaScript modifications.

---

# Icons

Use a single icon library throughout the application.

Recommended:

**Lucide Icons**

Guidelines:

* Professional
* Monochrome
* Small
* Consistent

Do not use:

* Emojis
* Colorful icons
* Decorative graphics

---

# Icon Mapping

| Section        | Parent Icon    | Child Icon  |
| -------------- | -------------- | ----------- |
| Home           | Home           | —           |
| Projects       | Folder         | File        |
| Publications   | Book           | File        |
| Thesis         | Graduation Cap | File        |
| Certifications | Badge          | Certificate |
| Activities     | Star           | Star        |
| Contact        | Mail           | —           |
| Profile        | User           | —           |

Activities represent professional participation.

Do not use trophy or award icons to avoid misrepresentation.

---

# Future Content

Future content shall remain masked within the source code until implementation is complete.

Examples include:

* Future Projects
* Future Publications
* Future Thesis
* Future Certifications
* Future Activities

Future placeholders shall never appear on the live portfolio.

Do not display "Coming Soon" or similar messages.

---

# Functional Integrity

The UI refresh shall not alter any existing functionality.

The following behavior shall remain unchanged:

* Navigation
* Expand / Collapse
* Dynamic content rendering
* Contact reveal
* Contact copy
* Credly links
* Certificate PDF links
* Publication links
* Thesis link
* Activity links

Only the presentation layer may change.

---

# Repository Structure

```text
assets/
├── documents/
├── icons/
└── images/

content/
├── activities/
├── certifications/
├── home/
├── publications/
└── thesis/

projects/
├── project1/
├── project2/
├── project3/
└── project4/

README.md
UI_GUIDELINES.md
UI_MOCKUP_V1.png

app.js
index.html
styles.css
```

Project-specific documentation such as architecture, schemas, templates, source code, and sample data shall remain within their respective project folders.

---

# Assets

Profile image:

`assets/images/profile.png`

Icons:

`assets/icons/`

Documents:

`assets/documents/`

Future assets shall follow the same structure.

---

# Responsive Design

Support:

* Desktop
* Laptop
* Tablet

Sidebar remains readable.

Content card scales proportionally.

---

# Accessibility

Requirements:

* Icons include accessible labels
* Images include descriptive alt text
* Keyboard navigation remains functional
* Maintain sufficient color contrast
* Interactive elements remain clearly identifiable
