let propName = 'c'

const rank = {
    a:1,
    b:2,
    [propName]:3
}
console.log(rank)      //computed properties are used to define the properties of an object in a dynamic way
console.log(rank["b"])         // we can access the properties of an object using the square brackets
console.log(rank.c)            // we can access the properties of an object using the dot operator


// Example 2
let Last_name = "lastname"
let fullname = {
    firstname: " Maz",
    [Last_name]: "Zama"

}
console.log("My fullname is:" + fullname.firstname + " " + fullname.lastname)    // we can access the properties of an object using the dot operator