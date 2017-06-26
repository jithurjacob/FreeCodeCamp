function calculateCashInDrawer(cid) {
    var balance = 0;
    cid.forEach(function(currency) {
        balance += currency[1];
    });
    return balance;
}

function getVal(currency_type){
    switch(currency_type){
        case "PENNY":return 0.01;
        case "NICKEL":return 0.05;
        case "DIME" : return 0.10;
        case "QUARTER": return 0.25;
        case "ONE": return 1.0;
        case "FIVE": return 5.0;
        case "TEN": return 10.0;
        case "TWENTY": return 20.0;
        case "ONE HUNDRED": return 100.0;
        default: return undefined;
    }
}


function checkCashRegister(price, cash, cid) {
    var change = parseFloat(cash) - parseFloat(price);
    var balance = 0, arr = [];
    var currencies = [["PENNY", 0.01],["NICKEL",0.05],["DIME",0.10],["QUARTER",0.25],["ONE",1.0],["FIVE",5.0],["TEN",10.0],["TWENTY",20.0],["ONE HUNDRED",100]].reverse();
    var balance = cid.reduce(function(total,item){
        if(Array.isArray(total))
            return total[1]+item[1];
        return total+item[1];
    });
    
    
    if(balance ==change)
        return "Closed";
    
    cid.reverse().forEach(function(item){
        var currency=item[0], currency_val=item[1];        
        //console.log(currency, currency_val,change, getVal(currency));
        if(change>=getVal(currency)){
            var counts = parseInt(Math.floor(change/getVal(currency)));
            var needed_val = counts*getVal(currency);
            //console.log(counts,needed_val,currency_val,change);
            if(needed_val<=currency_val){
                arr.push([currency, needed_val]);
                change = (change % getVal(currency)).toFixed(2);
            }else{
                arr.push([currency, currency_val])
                //console.log("fk",change,currency_val,(change-currency_val).toFixed(2));
                change = (change - currency_val).toFixed(2);
            }
        }
    });
    //console.log(change,arr);
    if(change!=0)
        return "Insufficient Funds";
    
    return arr;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));


/*
var assert = require('assert');
describe('checkCashRegister', function() {
    var tests = [{
            args: [19.50, 20.00, [
                ["PENNY", 1.01],
                ["NICKEL", 2.05],
                ["DIME", 3.10],
                ["QUARTER", 4.25],
                ["ONE", 90.00],
                ["FIVE", 55.00],
                ["TEN", 20.00],
                ["TWENTY", 60.00],
                ["ONE HUNDRED", 100.00]
            ]],
            expected: JSON.stringify([
                ["QUARTER", 0.50]
            ])
        },
        {
            args: [3.26, 100.00, [
                ["PENNY", 1.01],
                ["NICKEL", 2.05],
                ["DIME", 3.10],
                ["QUARTER", 4.25],
                ["ONE", 90.00],
                ["FIVE", 55.00],
                ["TEN", 20.00],
                ["TWENTY", 60.00],
                ["ONE HUNDRED", 100.00]
            ]],
            expected: JSON.stringify([
                ["TWENTY", 60.00],
                ["TEN", 20.00],
                ["FIVE", 15.00],
                ["ONE", 1.00],
                ["QUARTER", 0.50],
                ["DIME", 0.20],
                ["PENNY", 0.04]
            ])
        },
        {
            args: [19.50, 20.00, [
                ["PENNY", 0.01],
                ["NICKEL", 0],
                ["DIME", 0],
                ["QUARTER", 0],
                ["ONE", 0],
                ["FIVE", 0],
                ["TEN", 0],
                ["TWENTY", 0],
                ["ONE HUNDRED", 0]
            ]],
            expected: "Insufficient Funds"
        },
        {
            args: [19.50, 20.00, [
                ["PENNY", 0.01],
                ["NICKEL", 0],
                ["DIME", 0],
                ["QUARTER", 0],
                ["ONE", 1.00],
                ["FIVE", 0],
                ["TEN", 0],
                ["TWENTY", 0],
                ["ONE HUNDRED", 0]
            ]],
            expected: "Insufficient Funds"
        },
        {
            args: [19.50, 20.00, [
                ["PENNY", 0.50],
                ["NICKEL", 0],
                ["DIME", 0],
                ["QUARTER", 0],
                ["ONE", 0],
                ["FIVE", 0],
                ["TEN", 0],
                ["TWENTY", 0],
                ["ONE HUNDRED", 0]
            ]],
            expected: "Closed"
        }


    ];
    tests.forEach(function(test) {
        it('correctly converts ' + test.args + ' ', function() {
            var res = checkCashRegister(test.args[0], test.args[1], test.args[2]);
            assert.equal(res, test.expected);
        });
    });

});*/