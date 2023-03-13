// Currying in JavaScript is a function that takes one argument at a time and returns a new function expecting the next argument

// fun(x,y)
// fun(x)(y)

// function fun(a) {
//   return function (b) {
//     return `${a} ${b}`;
//   };
// }

// console.log(fun(5)(6));

// Why do we use Currying?
// 1. To avoid passing same variable again and again
// 2. To create Higher Order function
// 3. To make the function pure and less prone to errors
//4. Curriying can be used to manipulate DOM

// Infinite Currying

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    } else {
      return a;
    }
  };
}

console.log(add(5)(2)(4)(8)()());


