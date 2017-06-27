function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    var arr = {},arr_=[], sorted_keys= [];
    for(var i=0;i<arr1.length;i++)
        arr[arr1[i][1]] = arr1[i][0];
    //console.log(arr);
    for(var i=0;i<arr2.length;i++){
        //console.log(arr2[i]);
        if(Object.keys(arr).indexOf(arr2[i][1]) <0){
            arr[arr2[i][1]] = arr2[i][0];
        }else{
            arr[arr2[i][1]] = arr[arr2[i][1]] + arr2[i][0];
        }
    }
    //console.log(arr);
    sorted_keys = Object.keys(arr).sort();
    for(var i =0;i<sorted_keys.length;i++)
        arr_.push([arr[sorted_keys[i]],sorted_keys[i]]);
    return arr_;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
// console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));
