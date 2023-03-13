//function Declaration
// Definition
// Statement

// function square(num){
//     return num*num;
// }


//Function Expression - when you store a function inside a variable

// const square = function (num){
//     return num*num;
// }
    
//"Anonymous Function" = Function with no name

// A function which can be treated as a variable is known as "First Class Function"
    
// function square(num){
//     return num*num;
// }

// function display_square(fn)
// {
//     console.log("square is: " + fn(5));
// }
 
// display_square(square);

 
//The ability of a function to access variable and functions that are lexically out of its scope is called a Closure.

//A callback function is a function which is passed into another function as an argument, which is then invoked inside the outer function

a();
var x=10 ;


function a()
{
    console.log(x);
}