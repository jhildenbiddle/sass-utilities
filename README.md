# sass-utilities

[![NPM](https://img.shields.io/npm/v/sass-utilities.svg?style=flat-square)](https://www.npmjs.com/package/sass-utilities)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/jhildenbiddle/sass-utilities/blob/master/LICENSE)

A collection of [Sass](https://sass-lang.com/) classes, functions, mixins, and other utilities.

- [Documentation](https://jhildenbiddle.github.io/sass-utilities/) (via [SassDoc](http://sassdoc.com/))

## Installation

**NPM**

```shell
npm install sass-utilities
```

```scss
// All utilities
@use "sass-utilities";

// All functions
@use "sass-utilities/functions";

// All mixins
@use "sass-utilities/mixins";

// Single function
@use "sass-utilities/functions/_file-name";

// Single mixin
@use "sass-utilities/mixins/_file-name";
```

**CDN**

This library is available on [jsdelivr](https://www.jsdelivr.com/package/npm/sass-utilities) (below), [unpkg](https://unpkg.com/browse/sass-utilities/), and other CDN services that auto-publish npm packages.

```scss
// All utilities
@use "https://cdn.jsdelivr.net/npm/sass-utilities@0";

// All functions
@use "https://cdn.jsdelivr.net/npm/sass-utilities@0/functions";

// All mixins
@use "https://cdn.jsdelivr.net/npm/sass-utilities@0/mixins";

// Single function
@use "https://cdn.jsdelivr.net/npm/sass-utilities@0/functions/_file-name";

// Single mixin
@use "https://cdn.jsdelivr.net/npm/sass-utilities@0/mixins/_file-name";
```

**Git**

```shell
git clone https://github.com/jhildenbiddle/sass-utilities.git
```

## Usage

```scss
// All utilities (installed via npm)
@use "sass-utilities" as su;

div {
    @include su.triangle(right, 16px);
}
```

## Contact & Support

- Create a [GitHub issue](https://github.com/jhildenbiddle/sass-utilities/issues) for bug reports, feature requests, or questions
- Follow [@jhildenbiddle](https://twitter.com/jhildenbiddle) for announcements
- Add a ⭐️ [star on GitHub](https://github.com/jhildenbiddle/sass-utilities) or 🐦 [tweet](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjhildenbiddle%2Fsass-utilities&hashtags=css,sass,scss,developers,frontend) to support the project!

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/jhildenbiddle/sass-utilities/blob/master/LICENSE) for details.

Copyright (c) John Hildenbiddle ([@jhildenbiddle](https://twitter.com/jhildenbiddle))
