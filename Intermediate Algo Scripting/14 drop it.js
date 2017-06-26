
function dropElements(arr, func) {
  // Drop them elements.
  var arr1 = arr.filter(function(elem){
    return func(elem);
  });
  console.log(arr,arr1,arr.indexOf(arr1[0]));
  
  return arr.indexOf(arr1[0])>=0?arr.slice(arr.indexOf(arr1[0])):[];
}

//dropElements([0, 1, 0, 1], function(n) {return n ===1; });
console.log(dropElements([1, 2, 3, 4], function(n) {return n >5; }));
