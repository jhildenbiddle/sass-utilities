# sass-utilities

[![NPM](https://img.shields.io/npm/v/sass-utilities.svg?style=flat-square)](https://www.npmjs.com/package/sass-utilities)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/jhildenbiddle/sass-utilities/blob/master/LICENSE)
[![Sponsor this project](https://img.shields.io/static/v1?style=flat-square&label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/jhildenbiddle)

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

> 💡 Note the `@` version number lock in the URLs below. This prevents breaking changes in future releases from affecting your project and is therefore the safest method of loading dependencies from a CDN. When a new major version is released, you will need to manually update your CDN URLs by changing the version number after the @ symbol.

```scss
// All utilities
@use "https://cdn.jsdelivr.net/npm/sass-utilities@1";

// All functions
@use "https://cdn.jsdelivr.net/npm/sass-utilities@1/functions";

// All mixins
@use "https://cdn.jsdelivr.net/npm/sass-utilities@1/mixins";

// Single function
@use "https://cdn.jsdelivr.net/npm/sass-utilities@1/functions/_file-name";

// Single mixin
@use "https://cdn.jsdelivr.net/npm/sass-utilities@1/mixins/_file-name";
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

## Sponsorship

A [sponsorship](https://github.com/sponsors/jhildenbiddle) is more than just a way to show appreciation for the open-source authors and projects we rely on; it can be the spark that ignites the next big idea, the inspiration to create something new, and the motivation to share so that others may benefit.

If you benefit from this project, please consider lending your support and encouraging future efforts by [becoming a sponsor](https://github.com/sponsors/jhildenbiddle).

Thank you! 🙏🏻

## Contact & Support

- Follow 👨🏻‍💻 **@jhildenbiddle** on [Twitter](https://twitter.com/jhildenbiddle) and [GitHub](https://github.com/jhildenbiddle) for announcements
- Create a 💬 [GitHub issue](https://github.com/jhildenbiddle/sass-utilities/issues) for bug reports, feature requests, or questions
- Add a ⭐️ [star on GitHub](https://github.com/jhildenbiddle/sass-utilities) and 🐦 [tweet](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjhildenbiddle%2Fsass-utilities&hashtags=css,sass,scss,developers,frontend,javascript) to promote the project
- Become a 💖 [sponsor](https://github.com/sponsors/jhildenbiddle) to support the project and future efforts

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/jhildenbiddle/sass-utilities/blob/master/LICENSE) for details.

Copyright (c) John Hildenbiddle ([@jhildenbiddle](https://twitter.com/jhildenbiddle))
