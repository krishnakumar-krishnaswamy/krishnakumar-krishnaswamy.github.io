# Portfolio UI Guidelines

## Purpose

This document defines the user interface standards for the portfolio website.

The objective is to maintain a clean, professional, executive-style interface that emphasizes content over decoration while providing a consistent user experience across future enhancements.

---

# Design Philosophy

The portfolio shall present a professional executive appearance.

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

The application uses a two-panel layout.

## Left Panel

Contains:

* Profile
* Parent navigation
* Child navigation
* Social links

## Right Panel

Contains:

* Dynamic content rendering
* Single content card
* Rounded corners
* Soft shadow
* Center aligned content

---

# Color Palette

## Background

Very light neutral gray.

No gradients.

No textured backgrounds.

## Sidebar

Neutral gray matching the overall application theme.

## Content Card

White.

Rounded corners.

Subtle shadow.

## Accent

Accent colors shall only be used for:

* Selected navigation item
* Hyperlinks
* Buttons

No decorative colors.

---

# Typography

Use the browser system font stack.

Typography should follow a modern enterprise appearance similar to ChatGPT.

Guidelines:

* Normal font weight
* No bold navigation text
* Consistent font sizing
* Clear spacing for hierarchy

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

User icon or profile image

Krishna Kumar Krishnaswamy

Display the full name on a single line.

Profile image location:

assets/images/profile.png

The profile image may be replaced without requiring HTML, CSS or JavaScript modifications.

---

# Icons

Use a single icon library throughout the application.

Recommended:

Lucide Icons

Icons should be:

* Professional
* Small
* Monochrome
* Consistent

No emojis.

No colorful icons.

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

Future placeholders shall not be visible on the live portfolio.

Do not display "Coming Soon" or similar messages.

---

# Functional Integrity

The UI refresh must not alter any existing application functionality.

The following functionality shall remain unchanged:

* Navigation
* Expand / Collapse
* Dynamic content rendering
* Contact reveal
* Contact copy
* Credly links
* Certificate PDFs
* Publication links
* Thesis link
* Activity links

Only the presentation layer may change.

---

# Assets

Repository structure:

assets/

* icons/
* images/
* documents/

Icons, images and documents shall remain organized within their respective folders.

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

The interface shall follow basic accessibility practices.

Requirements:

* Icons include accessible labels
* Images include descriptive alt text
* Keyboard navigation remains functional
* Maintain sufficient color contrast
* Interactive elements remain clearly identifiable
