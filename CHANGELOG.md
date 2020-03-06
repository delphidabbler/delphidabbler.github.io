# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

