function gcd(a, b){
    // Euclidean algorithm
    var t;
    while (b != 0){
        t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function lcm(a, b){
    return (a * b / gcd(a, b));
}

function smallestCommons(arr) {
    var min = arr.reduce(function(min_,elem){
        return min_>elem?elem:min_;
    });
    var max = arr.reduce(function(max_,elem){
        return max_<elem?elem:max_;
    });
    if(DEBUG)
        console.log("min=",min," max=",max);
    var num =1;
    for(var i=min;i<=max;i++){console.log(i);
        num = lcm(num,i);
    }
  return num;
}
var DEBUG = true;

console.log(smallestCommons([1,5]));
// console.log(lcm(2,3));