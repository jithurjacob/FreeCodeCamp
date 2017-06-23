function repeat(str, count) {
    var array = [];
    for(var i = 0; i < count;)
        array[i++] = str;
    return array.join('');
}

function romanSymbol(num){
    //console.log("converting "+num);
    switch(num){
        case 0: return "";
        case 1: return "I"; 
        case 2: return "II"; 
        case 3: return "III"; 
        case 4: return "IV"; 
        case 5: return "V"; 
        case 6: return "VI"; 
        case 7: return "VII"; 
        case 8: return "VIII"; 
        case 9: return "IX"; 
        case 10: return "X"; 
        case 20: return "XX"; 
        case 30: return "XXX"; 
        case 40: return "XL"; 
        case 50: return "L"; 
        case 60: return "LX"; 
        case 70: return "LXX"; 
        case 80: return "LXXX"; 
        case 90: return "XC"; 
        case 100: return "C"; 
        case 400: return "CD"; 
        case 500: return "D"; 
        case 900: return "CM"; 
        case 1000: return "M"; 
        default:             
            var num_ = ""+num;
            var symbol ="";
            if(num >= parseInt(Math.pow(10,num_.length)/2)){ // greater than half so use halfs code first
                num = num - parseInt(Math.pow(10,num_.length)/2);
                symbol+= romanSymbol(parseInt(Math.pow(10,num_.length)/2));
                num_ = ""+num;
                
            }
            //console.log(num_,romanSymbol(parseInt(Math.pow(10,num_.length))));
            symbol+= repeat(romanSymbol(parseInt(Math.pow(10,num_.length - 1))),num_[0]);
            return symbol;

    }
}
function convertToRoman(num) {
    //console.log(num);
    var roman_num = [];
    var num_temp = num,i = 0;
    while(num_temp>0){        
        var n = parseInt(Math.pow(10,i))*parseInt(num_temp % 10);
        //console.log(n);
        roman_num.push(romanSymbol(n));
        num_temp = parseInt(num_temp/10);
        i+=1;
        //console.log(roman_num);
    }
    //console.log(roman_num);
    return roman_num.reverse().join('');
}

convertToRoman(891);


var assert = require('assert');
describe('RomanConversion', function () {
    var tests = [
        { args: 1, expected: "I" },
        { args: 2, expected: "II" },
        { args: 3, expected: "III" },
        { args: 4, expected: "IV" },
        { args: 5, expected: "V" },
        { args: 9, expected: "IX" },
        { args: 12, expected: "XII" },
        { args: 16, expected: "XVI" },
        { args: 29, expected: "XXIX" },
        { args: 44, expected: "XLIV" },
        { args: 45, expected: "XLV" },
        { args: 50, expected: "L" },
        { args: 68, expected: "LXVIII" },
        { args: 83, expected: "LXXXIII" },
        { args: 97, expected: "XCVII" },
        { args: 99, expected: "XCIX" },
        { args: 100, expected: "C" },
        { args: 250, expected: "CCL" },
        { args: 499, expected: "CDXCIX" },
        { args: 500, expected: "D" },
        { args: 501, expected: "DI" },
         { args: 600, expected: "DC" },
        { args: 649, expected: "DCXLIX" },
        { args: 798, expected: "DCCXCVIII" },
        { args: 891, expected: "DCCCXCI" },
        { args: 1000, expected: "M" },
        { args: 1004, expected: "MIV" },
        { args: 1006, expected: "MVI" },
        { args: 1023, expected: "MXXIII" },
        { args: 2014, expected: "MMXIV" },
        { args: 3999, expected: "MMMCMXCIX" }

    ];

    tests.forEach(function (test) {
        it('correctly converts' + test.args + ' ', function () {
            var res = convertToRoman(test.args);
            assert.equal(res, test.expected);
        });
    });

});