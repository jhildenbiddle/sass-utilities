const fs = require('fs');
const path = require('path');
const sass = require('sass');

function compileSass(sassText, autoImport = true, updatePaths = true) {
    const testFilePath = path.resolve(process.cwd(), 'tests',  'test.scss')

    if (autoImport) {
        sassText = `@use "${process.cwd()}/_index" as *;\n` + sassText;
    }

    if (updatePaths) {
        // Matches @ rules and injects current working director into path if not found
        // Ex: @use "file"; => @use "Users/john/path/to/file";
        const reURLs = new RegExp(`@([a-z]*) ['"](?!${process.cwd()})([^'"]*)['"]`, 'g');

        sassText = sassText.replace(reURLs, `@$1 "${process.cwd()}/$2"`.replace(/\/\//, '/'));
    }

    sassText = sassText.trim();

    console.log({ sassText, testFilePath });

    // TODO: As of Sass v1.54.0, the compileString() method is unable import
    // stylesheets using rules like @use and @forward. The following line should
    // be all we need but it currently does not work as expected. return
    // const result = sass.compileString(sassText);

    // The following read/write operation is a hack to address the issue
    // described above. The workaround is to write contents to a file and
    // process it using the compile() method instead of using compileString().
    fs.writeFileSync(testFilePath, sassText);

    const result = sass.compile(testFilePath);

    return result.css;
}

module.exports = compileSass;
