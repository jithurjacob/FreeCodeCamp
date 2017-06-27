
function orbitalPeriod(arr) {
    var GM = 398600.5;
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    //   var earthRadius = 6378.14;
    var arr_ = [];
    arr.forEach(function (element) {
        var temp = {};
        temp["name"] = element["name"];
        var PI = (22 / 7);
        var v = Math.round(Math.pow((GM / (earthRadius + element["avgAlt"])), 0.5));
        console.log(v);
        var p = 2 * PI * ((earthRadius + element["avgAlt"]) / v);
        temp["orbitalPeriod"] = p;
        arr_.push(temp);
    }, this);

    return arr_;
}
//http://keisan.casio.com/exec/system/1224665242
console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
//86400
console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));
//[{name : "iss", orbitalPeriod: 5557}, 
//{name: "hubble", orbitalPeriod: 5734}, 
//{name: "moon", orbitalPeriod: 2377399}].
