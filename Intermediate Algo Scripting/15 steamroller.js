function steamrollArray(arr) {
    // I'm a steamroller, baby
    var arr_ = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            let temp = steamrollArray(arr[i]);
            //console.log(arr[i], " is a bloody array it gives ", temp);
            //console.log("concatting", arr_, temp);
            arr_ = arr_.concat(temp);
            //console.log("after rolling", arr_);
        } else
            arr_.push(arr[i]);
        //console.log(i, arr[i], arr_);

    }
    return arr_;
}

console.log(steamrollArray([1,[2]]));
console.log(steamrollArray([1, [2],
    [3, [
        [4]
    ]]
]));