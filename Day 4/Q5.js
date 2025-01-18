// Use an arrow function to reverse a given string. For example, if the input is "hello", the output should be "olleh".

const reverseString = (str) => str.split('').reverse().join('');
console.log(reverseString("hello"));