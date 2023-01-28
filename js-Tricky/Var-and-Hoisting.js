//Q4
variable = 10;
(() => {
  variable2 = 100;
  console.log(variable);
  console.log(variable2);
  variable = 20;
  var variable2 = 50;
  console.log(variable);
})();
console.log(variable);
var variable = 30;
// console.log(variable2);
//ans:
//10
//100
//20
//20
//ReferenceError: variable2 is not defined

//Q5
test(); //not error
function test() {
  console.log("test");
}

test2(); //error
var test2 = () => console.log("test2");

/**
 * Function declaration with function keyword can be hoisted.
 * However, an arrow function cannot be hoisted,
 * even if it is declared with var variable.
 */
