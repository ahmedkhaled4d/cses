function foo() {
  let a = (b = 3);
  a++;
  return a;
}

foo();

console.log(typeof b);

/**
 * var is a functional scoped variable and let is a block-scoped variable.
 *  Although it seems that a and bare declared using let in let a = b = 0,
 * the reality is variable b is declared as a global variable and assigned to a window object.
 */
