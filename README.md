# Clarity — Spreadsheet Data Assistant

A bilingual, browser-based first pass for Excel and CSV data. This project adapts the workflow and safety guidance from the **AI Excel Data Analysis Assistant** skill package into a working static web app.

> **No AI model is connected.** The app performs deterministic checks and descriptive statistics in the browser. It does not generate LLM-powered business interpretations.

## Features

- English and Simplified Chinese interface.
- Local file selection or drag-and-drop for CSV, XLSX, XLS, XLSM, and ODS files (25 MB limit).
- Worksheet selection, read-only preview, and paged display.
- Missing-cell, exact duplicate-row, completely blank-row, and numeric IQR outlier signals.
- Descriptive statistics for recognized numeric fields: count, mean, median, minimum, maximum, and population standard deviation.
- Interactive value distribution chart, with a compact fallback if the chart library is unavailable.
- Downloadable structured JSON analysis report with methods, findings, export choices, limitations, and suggested validation steps.
- New cleaned XLSX export when SheetJS is available; CSV export is the offline fallback. Choose whether to omit exact duplicate rows and fully blank rows.
- Original input remains untouched; processing happens in the browser.

## Quick start

No build step or backend is required.

1. Download and extract the project ZIP.
2. Open `index.html` in a modern browser.
3. Select **Load sample data** or choose a CSV/Excel file.
4. Review the sheet preview, quality signals, profile, and chart.
5. Download the JSON report or choose cleaning options and export a new copy.

For local web-server testing, serve this folder with any static file server (for example, `python -m http.server 8000`) and open `http://localhost:8000`. The server only serves the app files; uploaded spreadsheets are not sent to it.

## Dependencies

The app has no package manager or build-time dependency. Two pinned browser libraries are loaded from their documented CDNs in `index.html`:

- [SheetJS Community Edition 0.20.3](https://docs.sheetjs.com/docs/getting-started/) — reading Excel-family workbooks and writing cleaned XLSX files. License: Apache-2.0.
- [Chart.js 4.6.1](https://www.chartjs.org/docs/latest/getting-started/installation.html) — distribution charts. License: MIT.

CSV import/export, analysis, the sample dataset, and the JSON report work without these libraries. XLS/XLSX/ODS import and XLSX export require the SheetJS script to load. Charts use the included value-preview fallback if Chart.js cannot load. The external scripts load when the page is opened, so an internet connection is needed for those features unless you replace the CDN URLs with locally hosted copies.

## Data handling and analysis notes

- Files are read with the browser File API and processed in page memory. The app contains no upload endpoint, analytics beacon, model API, or persistence layer.
- The file input is limited to 25 MB. Very wide or very large workbooks may still use substantial browser memory.
- The preview displays 10 records per page. Analysis covers the selected worksheet in full.
- A duplicate is an exact match across all data columns. It does not infer a business key such as an order ID.
- Outliers use the Tukey 1.5×IQR fences per numeric column. An outlier signal is a review prompt, not evidence that a value is invalid.
- Numeric statistics are calculated for fields where at least 75% of nonempty values can be read as numbers. Highly unique numeric fields are excluded as likely identifiers unless the header suggests a measure.
- Missing values are empty cells, nulls, or whitespace-only strings. Values such as `N/A`, `-`, and `0` are not treated as missing.
- Clean exports are new value-only files. Workbook formatting, formulas, charts, macros, hidden sheets, and other workbook features are not preserved. Do not use this export as a macro-preserving round trip.
- Before sharing a spreadsheet, remove or mask personal, financial, or confidential information. The app cannot determine whether a value is sensitive.

## Project files

- `index.html`, `styles.css`, `app.js` — the static app.
- `reference/original-skill-package/` — the original specification files from the supplied ZIP, retained for traceability.
- `LICENSE` — the MIT license text supplied with the original package.
- `SOURCE-ATTRIBUTION.md` — source and adaptation notes.
- `THIRD-PARTY-NOTICES.md` — notices for the browser libraries.

## License

This project preserves the MIT license and 2026 copyright notice from the supplied skill package. See [`LICENSE`](LICENSE), [`SOURCE-ATTRIBUTION.md`](SOURCE-ATTRIBUTION.md), and the retained original package under `reference/`. Browser dependencies retain their own licenses; see [`THIRD-PARTY-NOTICES.md`](THIRD-PARTY-NOTICES.md).

## Manual acceptance checklist

1. Load the included sample and confirm the dashboard shows 22 data rows, 7 columns, missing cells, one duplicate row, and an IQR outlier signal.
2. Switch to Chinese and back; verify labels and summary cards update.
3. Load a CSV with quoted commas and embedded newlines; confirm cells stay in their intended columns.
4. Load a multi-sheet workbook; select a second worksheet and confirm its preview and checks change.
5. Download the report and confirm it is valid JSON with quality, statistics, outlier methodology, cleaning choices, and validation steps.
6. Export a cleaned copy with duplicate removal enabled; verify the duplicate is omitted and the source file is unchanged.
7. Disable the CDN scripts or go offline; confirm CSV analysis and report export still work and XLSX/chart fallbacks are clear.

## Uploading to an existing GitHub repository

1. Extract this ZIP on your computer.
2. Open your existing repository on GitHub and confirm it is the intended project.
3. Choose **Add file → Upload files**.
4. Upload the *contents* of the extracted `ai-excel-data-assistant` folder. For a Pages site that should open at the repository URL, place `index.html`, `styles.css`, and `app.js` in the repository's configured Pages source folder (often the root). Keep the `reference/` folder and license/notice files alongside them.
5. Review the file list and commit the upload. This package does not publish anything or make repository changes by itself.

