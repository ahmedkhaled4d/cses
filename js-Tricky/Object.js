//Q8
var obj1 = { n: 1 };
var obj2 = obj1;
obj2.n = 2;
console.log(obj1); //ans: {n: 2}

//Q9
function foo(obj) {
  obj.n = 3;
  obj.name = "test";
}
foo(obj2);
console.log(obj1); //ans: {n: 3, name: "test"}
