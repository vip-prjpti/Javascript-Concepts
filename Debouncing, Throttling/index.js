// These are the techniques in javascript to optimise the application and browser performance.

// Debounce function limits the execution of a function call and waits for a certain amount of time before running it again.

// We can optimise and reduce the count of API calls by debounce logic. We can wait for certain amount of time before making the next API call.

// Here we monitor the delay user gives between two key presses. If this delay matches our threshold limit, then we make another API call.

// Debouncing is a technique where we can monitor the time delay of user action and once that delay reaches our predetermined threshold we can can make the function call.

// let counter = 0;

// function getData(){
//     console.log("fetching data"+ counter++);
// }

// function myDebounce(cb, d){
    //     let timer;

    //     return function(...args){
        //         if(timer) clearTimeout(timer);
        //             setTimeout(() => {
//                 cb(...args);
//             },d)

//     }
// };

// const optimisedFunc = myDebounce(getData,2000);




// Throttling is a technique where we make the function call in a predetermined time interval irrespective of continuous user actions.
// const myThrottle = (cb,d) => {
//     return function()
//     {
//         document.getElementById("mybutton").disabled=true;
//         setTimeout(()=>{
//             cb();
//         },d)
//     }
// }

// const newFunc = myThrottle(() =>{
//     document.getElementById("mybutton").disabled=false;
//     console.log("User Clicked");
// },5000)