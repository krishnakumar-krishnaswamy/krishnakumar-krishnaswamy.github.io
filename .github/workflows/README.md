# GitHub Actions Workflows

## Purpose

This directory contains GitHub Actions workflows used to implement Continuous Integration (CI) for the portfolio website.

The objective is to incrementally improve automated quality validation while keeping the workflow simple, maintainable, and aligned with Agile iterative development.

---

# Workflow

Current workflow:

```text
portfolio-ci.yml
```

This workflow executes automatically whenever changes are committed to the **main** branch.

---

# CI Evolution Roadmap

## Version 1 (Current)

Repository Integrity Validation

Checks:

* Repository checkout
* Required file verification

  * index.html
  * styles.css
  * app.js

Purpose:

Verifies that the portfolio's three primary application files exist. Prevents accidental deletion or incomplete commits.

---

## Version 2 (Current)

HTML Validation

Additional capability:

* Validate HTML structure using HTMLHint

Purpose: Ensures the portfolio homepage conforms to valid HTML.

Detects malformed HTML such as 

* missing closing tags
* invalid nesting
* structural HTML errors

---

## Version 3 (Current) 

CSS Integrity Validation

Purpose: Performs lightweight validation without enforcing formatting rules. Helps detect accidental overwrites or removal of core UI components.

---

## Version 4

JavaScript Validation

Additional capability:

* Validate JavaScript using ESLint

Purpose:

Detect JavaScript syntax and coding issues.

---

## Version 5 (Current)

Live Website Link Validation

Purpose: Ensure portfolio navigation and external references remain functional. Validates hyperlinks on the LIVE GitHub Pages website.

---

# Design Philosophy

This CI pipeline intentionally evolves through incremental versions.

Rather than introducing every validation at once, each version adds one quality gate, allowing:

* Easier learning
* Clear Git history
* Simpler troubleshooting
* Incremental improvement

This mirrors the same Agile and iterative development approach used throughout the portfolio projects.

---

# Future Enhancements

Potential future improvements include:

* Accessibility validation
* Lighthouse performance checks
* Security scanning
* Dependency auditing
* Automated deployment verification

These enhancements will be added only when they provide meaningful value to the portfolio.
