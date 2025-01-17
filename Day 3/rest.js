function fun1(x,y,...z){
    console.log({x,y,z})
}

fun1(10,"hello",30,40,50,60) // 10 20 [30,40,50,60] // rest operator is used to pass multiple values in a single parameter

function myfun(a,b,...manymoreArgs){
    console.log("a",a)
    console.log("b",b)
    console.log("manymoreArgs",manymoreArgs)

}
myfun("one","two","three","four","five","six") // a one b two manymoreArgs [ 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ]


