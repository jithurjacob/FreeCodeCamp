
function telephoneCheck(str) {
  // Good luck!
  return /([1]?[\s]?)(\d{3}|([(]\d{3}[)]))(([-]?)|([\s]?))(\d{3}|([(]\d{3}[)]))(([-]?)|([\s]?))(\d{4}|([(]\d{4}[)]))$/y.test(str);
}



telephoneCheck("555-555-5555");


var assert = require('assert');
describe('telephoneCheck', function () {
    var tests = [
        { args:"555-555-5555", expected: true },
        { args:"1 555-555-5555", expected:true },
        { args:"1 (555) 555-5555", expected: true },
        { args:"5555555555", expected: true },
        { args:"555-555-5555", expected:true },
        {args:"(555)555-5555", expected:true},
        {args:"1(555)555-5555",expected:true},
        {args:"555-5555", expected:false},
        {args:"5555555", expected:false},
        {args:"1 555)555-5555", expected:false},
        {args:"1 555 555 5555", expected:true},
        {args:"1 456 789 4444", expected:true},
        {args:"123**&!!asdf#", expected:false},
        {args:"55555555", expected:false},
        {args:"(6505552368)", expected:false},
        {args:"2 (757) 622-7382",expected:false},
        {args:"0 (757) 622-7382",expected:false},
        {args:"-1 (757) 622-7382",expected:false},
        {args:"2 757 622-7382",expected:false},
            {args:"10 (757) 622-7382",expected:false},
            {args:"27576227382",expected:false},
            {args:"(275)76227382", expected:false},
            {args:"2(757)6227382",expected:false},
            {args:"2(757)622-7382",expected:false},
            {args:"555)-555-5555",expected:false},
            {args:"(555-555-5555",expected:false},
            {args:"(555)5(55?)-5555",expected:false}
        
    ];
tests.forEach(function (test) {
        it('correctly converts ' + test.args + ' ', function () {
            var res = telephoneCheck(test.args);
            assert.equal(res, test.expected);
        });
    });

});