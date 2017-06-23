function pairElement(str) {
  return str;
}

pairElement("GCG");




var assert = require('assert');
describe('pairElement', function () {
    var tests = [
        { args:"ATCGA", expected: JSON.stringify([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]) },
        { args:"TTGAG", expected: JSON.stringify([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]) },
        { args:"CTCTA", expected: JSON.stringify([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]) },
        
    ];
tests.forEach(function (test) {
        it('correctly converts' + test.args + ' ', function () {
            var res = pairElement(test.args);
            assert.equal(JSON.stringify(res), test.expected);
        });
    });

});