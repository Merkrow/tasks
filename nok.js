function nok() {
    var i = arguments.length - 1,
        arr = [];

    while(i !== -1) {
        arr.push(arguments[i]);
        i--;
    }

    var r1 = 0,
        r2 = 0;

    var k = arr.length;

    for(var i = 0; i < k; i++) {
        r1 = arr[i] % arr[i+1];
        if(r1 === 0) {
            arr[i+1] = arr[i];
        } else {
            r2 = arr[i+1] % r1;
            if(r2 === 0) {
                arr[i+1] = (arr[i] * arr[i+1]) / r1;
            } else {
                arr[i+1] = (arr[i] * arr[i+1]) / r2;
            }
        }
    }

    return arr[k-1];

};


var a = nok(1,4,3,2,5,9,7,8,6,10,11,12,13,14,15,16,17,18,19,20);
console.log(a);