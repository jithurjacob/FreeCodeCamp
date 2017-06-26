
function findElement(arr, func) {
  var num ;
  num = arr.filter(function(elem){
    return func(elem);
  });
  return num[0];
}

findElement([1, 3,5,8,9,10], function(num){ return num % 2 === 0; });
