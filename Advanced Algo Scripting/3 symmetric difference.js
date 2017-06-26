
function sym(...args) {
    var arr_=args[0];
    
    console.log(arr_);
    
    for(var i=1;i<args.length;i++){
        var temp = []
        for(var j=0;j<arr_.length;j++){
            if(args[i].indexOf(arr_[j])<0){
                temp.push(arr_[j]);
            }
        }
        for(var j=0;j<args[i].length;j++){
            
            if(arr_.indexOf(args[i][j])<0){
                temp.push(args[i][j]);
            }
        }
        console.log(arr_,temp);
        arr_ = temp;
    }
    arr_ = arr_.filter(function(elem,index){
        return arr_.slice(index+1).indexOf(elem);
    });
  return arr_;
}

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]));