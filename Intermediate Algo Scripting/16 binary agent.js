function convertToDecimal(binary_num){
    var i = 0,num=0;
    var binary_num = parseInt(binary_num);
    //console.log(binary_num);
    while(binary_num>0){
        //console.log( parseInt(binary_num%10), (binary_num%10)*parseInt((Math.pow(2,i))));
        num+=(parseInt((binary_num%10)*parseInt((Math.pow(2,i)))));
        binary_num= parseInt(binary_num/10);
        i++;
    }
    //console.log(binary_num,num);
    return num;
}

function binaryAgent(str) {
    var bins = str.split(' ');
    str = bins.map(function(elem){
        return String.fromCharCode(convertToDecimal(elem));
    }).join('');
  return str;
}
//console.log(convertToDecimal("11"));
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
