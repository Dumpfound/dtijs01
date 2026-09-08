//  Expression function 
// 1 Anonymous function คือ ฟังก์ชันที่ไม่มีชื่อ

let myData1 = function () {
    console.log("Hello World")
}

let myData2 = function (a, b) {
    console.log("a + b")
}

let myData3 = () => {
    return "wow wow"
}

let myData4 = (x, y, z) => {
    console.log("x, y, z")
    return x * y * z
}


myData1()
myData2(10, 20)
console.log(myData3())
console.log(myData4(10, 20, 30))


let myData5 = xx => {
    console.log(xx)
}

let myData6 = () => "Wow wow"

let myData7 = (x, y, z) => console.log("Hi...")

console.log(myData6())
myData7(11, 22, 33)