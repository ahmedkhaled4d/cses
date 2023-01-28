//Q7
const length = 4;
const fns = [];
const fns2 = [];
for (var i = 0; i < length; i++) {
  fns.push(() => console.log(i));
}
for (let i = 0; i < length; i++) {
  fns2.push(() => console.log(i));
}

fns.forEach((fn) => fn()); // => 4 4 4 4
fns2.forEach((fn) => fn()); // => 0 1 2 3
