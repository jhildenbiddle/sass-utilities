const fs = require('fs');
const path = require('path');
const sass = require('sass');

const srcPath = path.resolve(__dirname, 'test.scss');
const srcText = fs.readFileSync(srcPath, 'utf8');

console.log({ srcText });

try {
    const result = sass.compile(srcPath);
    console.log('sass.compile() success');
    console.log(result);
}
catch(err) {
    console.error('sass.compile() fail');
}

try {
    const test2 = sass.compileString(srcText);
    console.log('sass.compileString() success');
    console.log(result);
}
catch(err) {
    console.error('sass.compileString() fail');
    throw(err);
}
