//Q1
let text = "abcde";
text[1] = "z";
console.log(text); //ans: abcde

//Q2
/**
 * Assigning arr.length as 0 is the same as resetting or clearing the array,
 * so right now, the array will become an empty array
 */
const arr = [1, 2, 3];
arr.length = 0;
console.log(arr); //ans: []

//Q3
const arr = [1, 2, 3, 4];
arr[100] = undefined;
console.log(arr, arr.length); //ans: [ 1, 2, 3, 4, <96 empty items>, undefined ]
