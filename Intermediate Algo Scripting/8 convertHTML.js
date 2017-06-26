
function convertHTML(str) {
  // &colon;&rpar;
  str = str.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");
  return str;
}

var assert = require('assert');
describe('convertHTML', function () {
    var tests = [
        { args:"Dolce & Gabbana", expected: "Dolce &amp; Gabbana"},
        { args:"Hamburgers < Pizza < Tacos", expected: "Hamburgers &lt; Pizza &lt; Tacos" },
        { args:"Sixty > twelve", expected:"Sixty &gt; twelve"},
        { args:'Stuff in "quotation marks"', expected: "Stuff in &quot;quotation marks&quot;" },
        {args:"Shindler's List", expected:"Shindler&apos;s List"},
        {args:"abc",expected:"abc"},
        {args:"<>", expected:"&lt;&gt;"},
        
        
    ];
tests.forEach(function (test) {
        it('correctly converts' + test.args + ' ', function () {
            var res = convertHTML(test.args);
            // var arr1=[],arr2=[];
            // for(var i=0;i<res.length;i++)
            //     arr1.push(res.charCodeAt(i));
            // for(var i=0;i<test.expected.length;i++)
            //     arr2.push(test.expected.charCodeAt(i));
            // console.log(res,arr1,arr2);
            assert.equal(res, test.expected);           
            
        });
    });

});