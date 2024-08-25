function partlist(arr) {
    var bigres = [], i = 0;
    while (i < arr.length) { 
        var res = [];
        res.push(arr.slice(0, i+1).join(" "));
        res.push(arr.slice(i+1, arr.length).join(" "));
        bigres.push(res);
        i++;
    }
    var l = bigres.length;
    return bigres.slice(0, l-1);
}