
function translatePigLatin(str) {
    var i = 0;
    var str_ =str;
    for(i=0;i<str.length;i++){
        var c = str[i];
        var vowels = ['a','e','i','o','u'];
        if(vowels.indexOf(c)>=0)
            break;
    }
    if(i == 0){
        str_ = str+"way";
    }else{
        var part = str.slice(0,i);
        str_ = str.slice(i) + part + "ay";
    }
  return str_;
}

translatePigLatin("consonant");

var assert = require('assert');
describe('translatePigLatin', function () {
    var tests = [
        { args:"california", expected: "aliforniacay" },
        { args:"paragraphs", expected: "aragraphspay" },
        { args:"glove", expected: "oveglay" },
        { args:"algorithm", expected: "algorithmway" },
        { args:"eight", expected: "eightway" },
    ];
tests.forEach(function (test) {
        it('correctly converts' + test.args + ' ', function () {
            var res = translatePigLatin(test.args);
            assert.equal(res, test.expected);
        });
    });

});