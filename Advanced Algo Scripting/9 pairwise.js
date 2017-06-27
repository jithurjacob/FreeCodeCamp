
function pairwise(arr, arg) {
    var temp = [];
    for(var i=0;i<arr.length;i++){
        if(DEBUG)        
            console.log(temp);        
        var index = arr.indexOf(arg-arr[i],temp.lastIndexOf(arg-arr[i])+1);
        
        if(DEBUG)
            console.log(i,arr[i],arg-arr[i],index,temp.lastIndexOf(arg-arr[i]));
        if(index>=0 && index!=i && temp.indexOf(i)<0 && temp.indexOf(index)<0){
            temp.push(i);
            temp.push(index);
        }
    }
    if(DEBUG)    
        console.log(temp);
    if(temp.length === 0)
    return 0;
    return temp.reduce(function(total,elem){return total+elem;});
}
var DEBUG = true;
// console.log(pairwise([1,4,2,3,0,5], 7));
// console.log(pairwise([1, 3, 2, 4], 4));
//console.log(pairwise([1, 1, 1], 2));
//console.log(pairwise([0, 0, 0, 0, 1, 1], 1));
console.log(pairwise([], 100));