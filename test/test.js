var assert = require('assert');
describe('RomanConversion', function () {
    var tests = [
        { args: 2, expected: 3 },
        { args: 2, expected: 6 },
        { args: 2, expected: 10 }
    ];

    tests.forEach(function (test) {
        it('correctly converts' + test.args + ' ', function () {
            var res = convertToRoman.apply(null, test.args);
            assert.equal(res, test.expected);
        });
    });

});