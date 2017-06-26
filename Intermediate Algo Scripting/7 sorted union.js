
function uniteUnique(...arr) {
    var arr_ = [];
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr[i].length;j++){
            if(arr_.indexOf(arr[i][j])<0){
                arr_.push(arr[i][j]);
            }
        }
    }
    console.log(arr, arr_);
    return arr_;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);




var assert = require('assert');
describe('uniteUnique', function () {
    var tests = [
        { args:[[1, 3, 2], [5, 2, 1, 4], [2, 1]], expected: JSON.stringify([1, 3, 2, 5, 4]) },
        { args:[[1, 3, 2], [1, [5]], [2, [4]]], expected: JSON.stringify([1, 3, 2, [5], [4]]) },
        { args:[[1, 2, 3], [5, 2, 1]], expected: JSON.stringify([1, 2, 3, 5]) },
        { args:[[1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]], expected: JSON.stringify([1, 2, 3, 5, 4, 6, 7, 8]) },
        
    ];
tests.forEach(function (test) {
        it('correctly converts' + JSON.stringify(test.args) + ' ', function () {
            var res = uniteUnique.apply(null,test.args);
            assert.equal(JSON.stringify(res), test.expected);
        });
    });

});