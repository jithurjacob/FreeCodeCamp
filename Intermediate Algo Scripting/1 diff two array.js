function diffArray(arr1, arr2) {
  var newArr = [];
  //console.log(arr1,arr2);
  // Same, same; but different.
  arr1_ = arr1.filter(function(val){
    return arr2.indexOf(val) <0;
  }); 
    //console.log(arr1_,arr1);
  arr2_ = arr2.filter(function(val){
    return arr1.indexOf(val) <0;
  });
  //console.log(arr2_,arr2);
  newArr = newArr.concat(arr1_).concat(arr2_);
  //console.log(newArr);
  return newArr;
} 

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
