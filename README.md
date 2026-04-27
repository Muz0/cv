# CV Website

Personal static CV website for Muzaffar Mustafayev.

The site is built with plain HTML, CSS, and vanilla JavaScript modules. It does
not require a build step, package manager, backend, or database.

## Stack

- HTML5
- CSS3
- Vanilla JavaScript ES modules
- Static assets: WebP image and PNG favicon

## Project Structure

```text
.
|-- index.html          # Main HTML document and metadata
|-- css/
|   `-- style.css       # Layout, responsive styles, theme, and print styles
|-- js/
|   |-- data.js         # CV profile, links, certificates, and jobs data
|   |-- main.js         # App initialization
|   `-- ui.js           # DOM rendering and UI behavior
|-- img/
|   `-- Muzaffar.webp   # Profile image
|-- favicon-16x16.png
`-- LICENSE
```

## Editing Content

Most CV content is stored in `js/data.js`:

- `profile`: name, summary, personal details, contact details, links, and photo
- `certificates`: certificate list
- `jobs`: work experience entries

Set `display: true` on a job or certificate to show it on the site. Items with
`display: false` stay in the data file but are hidden from the rendered page.

## Metadata and Preview

Page title, description, favicon, Open Graph, and Twitter Card metadata are in
`index.html`. These tags control how the site appears in search results,
LinkedIn, and messaging apps.

For best social previews, use absolute URLs for `og:url`, `og:image`, and
`twitter:image`.

## Notes

- The site supports light, dark, and system color themes.
- Print styles are included for CV/PDF output.
- No dependency installation is required.
