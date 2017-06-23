function myReplace(str, before, after) {
    var arr = str.split(" ");
    arr = arr.map(function(elem){
        if(elem.toLowerCase() === before.toLowerCase()){
            var firstChar = elem.charCodeAt(0);
            var letters = after.split('');
            if(firstChar >= 65 &&  firstChar <= 90){
                return (letters[0].toUpperCase() + letters.splice(1).join(''));
            }else{
                return (letters[0].toLowerCase() + letters.splice(1).join(''));                
            }
        }
        return elem;
    });
  return arr.join(" ");
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

var assert = require('assert');
describe('myReplace', function () {
    var tests = [
        { args:["Let us go to the store", "store", "mall"], expected: "Let us go to the mall" },
        { args:["He is Sleeping on the couch", "Sleeping","sitting"], expected: "He is Sitting on the couch" },
        { args:["This has a spellngi error", "spellngi", "spelling"], expected: "This has a spelling error" },
        { args:["His name is Tom", "Tom", "john"], expected: "His name is John" },
        { args:["Let us get back to more Coding", "Coding", "algorithms"], expected: "Let us get back to more Algorithms" },
    ];
tests.forEach(function (test) {
        it('correctly converts' + test.args + ' ', function () {
            var res = myReplace(test.args[0],test.args[1],test.args[2]);
            assert.equal(res, test.expected);
        });
    });

});