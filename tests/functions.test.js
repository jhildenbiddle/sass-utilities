const compileSass = require('./helpers/compile-sass');

describe('chevron-data-uri', () => {
    test('Compile', () => {
        const result = compileSass(`
            .myclass {
                background: red;

                nested {
                    color: blue;
                }
            }
        `, false, false);

        expect(result).toMatchSnapshot();
    });
});
