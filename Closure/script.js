// A function bind together with its lexical scope froms a closure.

// When we return a function from a function it still remembers the variables in their lexical scope.

// A closure is created evverytime a function is created

// function x()
// {
//     var a = 7;
//     function y()
//     {
//         console.log(a);
//     }
//     return y;
// }

// var z = x();
// console.log(z);
// .......thousands of line
// z();

// Now after line 15 the funtion y no longer exist but it still remebers the values in its lexical scope, this is due to closure.
// and if we call this function z() after some time, it will run.

// NOTE: and when we return a function it remebers the reference of that variable but not the actual value


// Closures Use case
// 1. Currying
// 2. Funtion like once
// 3. memoise
// 4. setTimeouts
// 5. Module Design Patterns


function printCount() {
    let count = 0 ;
    if (count === 0)
    {
        let count = 1;
        console.log(count);
    }
    console.log(count);
};

printCount();