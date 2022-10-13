const sass = require('sass');

function dedent(str) {
    str = str.replace(/^ *\n+/, '');
    let match = str.match(/^\s+/);
    return match ? str.replace(new RegExp('^'+match[0], 'gm'), '') : str;
}

function compileSass(sassText, autoImport = true) {
    sassText = dedent(sassText);

    if (autoImport) {
        sassText = `@use "${process.cwd()}/_index" as *;\n` + sassText;
    }

    // NOTE: Using legacy Sass API to work around Jest compatibility issue
    // 1. https://github.com/sass/dart-sass/issues/710
    // 2. https://github.com/sass/dart-sass/issues/1692
    const result = sass.renderSync({
        data: sassText
    });

    return result.css.toString();
}

module.exports = compileSass;
