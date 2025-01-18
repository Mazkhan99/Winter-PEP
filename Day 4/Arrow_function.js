const test = (x,y,z) => {
    console.log(x+y+z)    //arrow function is used to define a function in a short way 
}

test(4,3,7)




const per = (x,y,z=4) => {
    console.log(x+y+z)
}

per(3,5)

//Arrow function without parameter

const msg= () => {
    console.log("Hello World")
}
msg()


//Arrow function with single parameter

const msg1 = x => {
    console.log(x+x)
}
msg1(5)

//Arrow function with multiple parameter

const msg2 = (x,y) => {
    console.log(x+y)
}
msg2(2,3)

//Arrow function with return statement

const person = (firstName, lastName) => ({firstName: firstName, lastName: lastName})
console.log(person('punjab', 'LPU'))


