const compileSass = require('./helpers/compile-sass');

describe('chevron-data-uri', () => {
    test('Compile', () => {
        const result = compileSass(`
            .myclass {
                background: chevron-data-uri(right);
            }
        `);

        expect(result).toMatchSnapshot();
    });
});

describe('svg-data-uri', () => {
    test('Compile', () => {
        const svg = '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" /></svg>';
        const result = compileSass(`
            .myclass {
                background: svg-data-uri('${svg}');
            }
        `);

        expect(result).toMatchSnapshot();
    });
});

describe('_triangle-data-uri', () => {
    test('Compile', () => {
        const result = compileSass(`
            .myclass {
                background: triangle-data-uri(right);
            }
        `);

        expect(result).toMatchSnapshot();
    });
});