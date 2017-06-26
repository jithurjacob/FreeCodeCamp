
function truthCheck(collection, pre) {
  // Is everyone being true?
  for(var i=0;i<collection.length;i++){
    if(Object.keys(collection[i]).indexOf(pre)<0 )
        return false;
    else{
        var value = collection[i][pre];
        if(!value)
            return false;
        if(value == "")
            return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
