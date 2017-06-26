function isNumberType(arg){
    if(typeof(arg)==typeof(1))
        return true;
    return false;
}

function addTogether(...args) {
    var a=args[0],b;
    if(args[1]){
        if(isNumberType(args[1]))
            return args[0] + args[1];
    }else{
        if(!isNumberType(args[0]))
            return undefined;
        function add(y){
            if(!isNumberType(y))
                return undefined;
            return args[0]+y;
        }
        return add;
    }
  return undefined;
}

console.log(addTogether(2,3));
console.log(addTogether(2)(3));
