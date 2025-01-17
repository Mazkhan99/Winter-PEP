// Ques 1 - 
function calculateDiscount(price, discount=10){
    return price - discount
}

calculateDiscount(100)
console.log(calculateDiscount(100))

// Ques 2 -

function mergeArrays(a,b){
    return [...a,...b]

}
console.log(mergeArrays([1,2,3],[4,5,6]))

// Ques 3 -


function logArguments(a,b,...args){
    console.log({a})
    console.log({b})
    console.log({args})
}

console.log(logArguments(1,2,3,4,5,6,7))

// Ques 4 -

function sum(a,b,c){
    return a+b+c
}

const no = [1,2,3]

const result = sum( ...no)
console.log(result)




