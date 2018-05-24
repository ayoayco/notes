function factorial(num, i){
    var i = i || 1;

    if(num < 2){
        return i;
    }
    return factorial(num - 1, i * num);

}

console.log('result: ' + factorial(4));

