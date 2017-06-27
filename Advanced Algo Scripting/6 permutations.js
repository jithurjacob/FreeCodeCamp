function getPermutations(input) {
    input = input.split('');
    var i, j, k, temp, base, current, outputs = [[input[0]]];
    for (i = 1; i < input.length; i++) {
        current = [];
        for (j = 0; j < outputs.length; j++) {
            base = outputs[j];
            for (k = 0; k <= base.length; k++) {
                temp = base.slice();
                temp.splice(k, 0, input[i]);
                current.push(temp);
            }
        }
        outputs = current;
    }
    return outputs;
}

function permAlone(str) {
    var permutaions = getPermutations(str);
    //console.log(permutaions);
    var arr = permutaions.filter(function(elem){
        for(var i=0;i<elem.length-1;i++){
            if(elem[i]==elem[i+1])
                return false;
        }
        return true;
    });
    //console.log(arr);
    return arr.length;
}

permAlone('aab');