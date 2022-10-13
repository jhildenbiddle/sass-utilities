const compileSass = require('./helpers/compile-sass');

describe('fluid-prop', () => {
    test('Compile', () => {
        const result = compileSass(`
            .myclass {
                @include fluid-prop(font-size, 5vw, 16px, 48px);
            }
        `);

        expect(result).toMatchSnapshot();
    });
});

describe('mq', () => {
    test('Compile - Defaults', () => {
        const result = compileSass(`
            .myclass {
                @include mq(small) {
                    color: red;
                }
            }
        `);

        expect(result).toMatchSnapshot();
    });

    test('Compile - feature and value as list', () => {
        const result = compileSass(`
            .myclass {
                @include mq(max-width medium) {
                    color: green;
                }
            }
        `);

        expect(result).toMatchSnapshot();
    });

    test('Compile - multiple conditions via nessted queries', () => {
        const result = compileSass(`
            .myclass {
                @include mq(small) {
                    @include mq(landscape) {
                        color: red;
                    }
                    @include mq(portrait) {
                        color: blue;
                    }
                }
            }
        `);

        expect(result).toMatchSnapshot();
    });
});

describe('triangle', () => {
    test('Compile', () => {
        const result = compileSass(`
            .myclass {
                @include triangle();
            }
        `);

        expect(result).toMatchSnapshot();
    });
});
