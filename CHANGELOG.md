# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v0.6.0 - 2020-05-28

### Added

* Article pages:
    * #4: "How to remember a window's size, state and position".
    * #6: "How to access environment variables".
    * #11: "How to catch files dragged and dropped on an application from Explorer".
    * #15: "How to integrate help files into the Delphi 3-7 IDE."
    * Placeholder pages for the remaining 21 articles with links to PDF copies of the articles.
* New scaffolding to enable Jekyll to render the articles pages.
* All outstanding program pages:
    * 8 Queens Problem Solver (mothballed).
    * John Conway's Game Of Life (mothballed).
    * BoobyTrap! (mothballed).
    * SIBuilder (obsolete)
    * Component Help Installer (obsolete)

### Changed

* Updated CSS style sheets:
    * Added new styles required by article pages.
    * Modified styling of page headers for software pages to support "mothballed" and "obsolete" styles in addition the the default ("current") style.
    * Added styling for image captions.
    * Various tweaks and rationalisation of SASS code.
* Revised categorisation of software pages: added "obsolete" status to existing "current" and "mothballed" statuses.
* Revised software page templates to support "mothballed" and "obsolete" page styles.
* Fixed some images that weren't rescaling to fit small screens.
* Replaced external links with local links for:
    * All article pages.
    * Program pages added in this release.

### Removed

* YAML files made redundant by addition of local articles pages and completion of program page collection.

## v0.5.0 - 2020-03-20

### Added

* A page for each non-mothballed application and linked to them from `programs.html` (issue #24).
* A page for each non-mothballed code library project and linked to them from `codelib.html` (issue #25).
* A page explaining how to install code library projects into the Delphi IDE (issue #29). Linked from Code Library Pages.

### Changed

* Minor restyling of glyphs that indicate external links.
* Modified list margins and indents.
* Minor changes to site styling.
* Internal changes:
    * Modified CSS for unique styles used on application and code library project pages.
    * Glyphs on external links now displayed automatically for `http:\\` and `https:\\` URLs, except on link buttons.
    * Glyphs in alerts now displayed via a CSS class rather than being added explicitly in HTML.

## v0.4.2 - 2020-03-06

### Fixed

* "Errors on _Credits_ page" - fixed typos and links (commit 94e36f7, issue #18).
* "Update license details in _README_" - provided link to relevant anchor on _Credits_ page (commit a847e9e, issue #17).
* "No license details for 3rd party prefixfree script" - added to _Credits_ page (commit 1239aa8, issue #16),

### Changed

* Renamed heading on _Credits_ page.
* Changed footers to refer to _Credits & License_ page instead of _Credits_ page.

## v0.4.1 - 2020-03-06

### Fixed

* Fix critical Javascript and font loading issues:
    * "Menu does not drop down on Android Chrome" bug (issue #13).
    * "Fonts not loading on published site" bug (issue #20).
    * "Collapsed menu drop-down not working on published site" bug (issue #21).
* Fix typos in `CHANGELOG.md`

## v0.4.0 - 2020-03-06

### Added

* Glyphs added to some actions and links.
* Social media links, using glyphs, added to strapline in body of home page.
* Favicon added to be displayed by browsers.
* New _Credits_ page linked to from page footer. Provides license and copyright information for site and 3rd party code.
* New social media links added to footer.

### Changed

* Completely overhauled site styling (see issue #7):
    * changed fonts used in site - uses fonts from Google Fonts for text and Font Awesome for glyphs;
    * styled main header and navigation;
    * styled main strap line on home page;
    * styled footer;
    * styled page typography;
    * re-styled panels used to display sections on _Home_, _Applications_, _Code Library_ and _Articles_ pages;
    * logo and drop down menu used when menu is collapsed now change on tiny phone screens to use less real estate.
* Revised content of page footer.
* _Home_ item in main menu replaced by a glyph in uncollapsed menu.
* Updated _Licenses_ section of `README.md` to add references to site's source code license and Font Awesome license.
* Improved accessibility for speech reader users.
* Internal changes:
    * centralised many literal links and associated information into constants;
    * overrode many Bootstrap defaults to aid in restyling;
    * added some new SASS code to customise styling;
    * improved semantics of HTML.

## v0.3.0 - 2020-03-02

### Added

* Applications page listing all DelphiDabbler open source programs - (commit a9216e2 / issue #2)
* Code Library page listing all DelphiDabbler open source Delphi components, classes, routines and IDE extensions (commit 16447cc / issue #3)
* Articles pages listing all DelphiDabbler articles (commit 61105ad / issue #4)

### Fixed

* Typos in `README.md` (commit ff591e3 / issues #1 & #5)

### Changed

* Complete re-write of `README.md` (commits f0da675 & eb57483 / issue #6)
* Re-ordered releases in `CHANGELOG.md` file (commit 165c76f)

## v0.2.0 - 2020-03-01

### Added

* Responsive design using customised Twitter Bootstrap.
* Version number now displayed in page footer.

### Changed

* Revised layout of content on both pages.
* Page header and menu appearance overhauled:
    * menu is now horizontal;
    * both header and menu now change appearance according to display size.
* Internal changes:
    * data files now used to record site name, version and links.

## v0.1.0 - 2020-02-29

### Added

* Initial, minimal, Jekyll based site created.

