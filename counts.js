function s(str) {
    var arr = str.split('').sort();
    var l = str.length,
        prev,
        a = [];
    b = [];

    for(var i = 0; i < l; i++) {
        if ((arr[i].charCodeAt(0) >= 65) && (arr[i].charCodeAt(0) <= 122))
            if(arr[i] !== prev) {
                a.push(arr[i]);
                b.push(1);
            } else {
                b[b.length-1]++;
            }
        prev = arr[i];
    }
    return [a,b];

};

var stri = "sajdhgas hsagd hagsdg hadsg ahs ggDHSG ghd gasd GHSAHGSGDAHGD hgsdaGSHGHASg ";
console.log(s(stri));