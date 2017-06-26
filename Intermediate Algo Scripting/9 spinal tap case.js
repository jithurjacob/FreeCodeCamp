function spinalCase(str) {
    // "It's such a fine line between stupid, and clever."
    // --David St. Hubbins
    var regex = /[A-Z][a-z0-9]+|[a-z0-9]+|/g;
    var arr = [];
    let m;
    while ((m = regex.exec(str)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        if(m[0]!='')
            arr.push(m[0]);
    }
    return arr.join('-').toLowerCase();
}

console.log(spinalCase('thisIsSpinalTap'));

console.log(spinalCase('This Is Spinal Tap'));