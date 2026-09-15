// Array

let myArray01 = [10, 20, 30, 40, 50]

for(let i = 0; i < myArray01.lenght; i++){
    console.log(myArray01[01] * 10)
}

myArray01.foreach(function(value, index){
    console.log(value * 10 `Index $(Index)`)
})

for(let value of myArray01){
    console.log(value * 10)
}

(myArray01.map( (value, index) => {
    console.log(value * 10,, `Index: $(index)`)
}))