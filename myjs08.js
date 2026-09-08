// Function : Default: Parameter

function funcA(a, b, c){
    console.log(a, b, c);

}

function funcB(a, b = 555, c = 999){
    console.log(a, b, c);

}


funcA(10, 20, 30) // call function

funcA(111, 222)
console.log('---------------------------')

funcB(10, 20, 30) // call function
funcB(111)