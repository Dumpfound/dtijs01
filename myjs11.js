// ANonymous funtion
funtion test01(x, y){
    console.log(x)
    y()
}

funtion test02(a, b, c){
    let data = a + c(20);
    console.log(data);
    b(11, 22, 33);
}
// --------------

test01(555, funtion (){
    console.log("Wow")
});

test02(
    100,
    function (x, y, z) {
        console.log(x + y + z);
    },
    function (m) {
        return m * 5;
    },
);