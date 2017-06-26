function getFib(num){
    var a=1,b=0,arr=[];
    while(a<=num){
        arr.push(a);
        a = a+b;
        b=a-b;
    }
    return arr;
}
function sumFibs(num) {
    var nums = getFib(num);
    //console.log(nums);
    nums = nums.reduce(function(total,i){
        if(i%2 == 1)
            total+=i;
        return total;
    });    
    return nums;
}

console.log(sumFibs(1000));