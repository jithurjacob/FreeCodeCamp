
function orbitalPeriod(arr) {
     var GM = 398600.4418;
  var earthRadius = 6367.4447;
    var arr_ = [];
    arr.forEach(function (element) {
        var temp = {};
        temp["name"] = element["name"];        
        temp["orbitalPeriod"] = Math.round(2 * Math.PI * Math.sqrt( Math.pow((element["avgAlt"]+earthRadius),3)/GM ,0.5));
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
