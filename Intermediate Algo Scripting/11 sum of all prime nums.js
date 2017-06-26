function getPrimes(num){
    var arr=[2], i =3;
    while(i<=num){
        var j =2,flag=false;
        while(j<=i/2){
            if(i%j ==0){
                flag = true;
                break;
            }
            j++;
        }
        if(!flag)
            arr.push(i);
        i+=2;
    }
    return arr;
}
function sumPrimes(num) {
    var nums = getPrimes(num);
    num = nums.reduce(function(total,elem){
        return total+elem;
    })
  return num;
}

console.log(sumPrimes(10));