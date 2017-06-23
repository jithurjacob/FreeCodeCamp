function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
 
 collection.forEach(function(elem){
  var keys_present = Object.keys(elem).filter(function(val){
      //console.log(val, source ,Object.keys(source).indexOf(val));
//    return Object.keys(source).indexOf(val) >= 0 ;
    if(Object.keys(source).indexOf(val) >= 0 )
        return source[val] === elem[val];
  });
  //console.log(keys_present, source);
  if( Object.keys(keys_present).length == Object.keys(source).length)
    arr.push(elem);
 });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });


var assert = require('assert');
describe('Checking', function () {
    var tests = [
        { args: [[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }], expected: [{ first: "Tybalt", last: "Capulet" }] },

{ args: [[{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }], expected: [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }] },

{ args: [[{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }], expected: [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }] },

{ args: [[{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }], expected: [{ "a": 1, "b": 2, "c": 2 }] },
    ];
    tests.forEach(function (test) {
        it('correctly gives' + test.args + ' ', function () {
            var res = whatIsInAName(test.args[0],test.args[1]);
            assert.equal(JSON.stringify(res), JSON.stringify(test.expected));
        });
    });

});