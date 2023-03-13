//Promise Exmaple******************************************************
// const sub = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const result = true;
//     if (result) {
//       resolve("Subscribe to Vip Prjpti");
//     } else {
//       reject(new Error("WHY NOT SUBSCRIBED?"));
//     }
//   }, 2000);
// });

// sub.then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function importantAction(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Subscribe to ${username}`);
    }, 1000);
  });
}
function likeVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Like ${video}`);
    }, 1000);
  });
}
function shareVideo(video) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Share ${video}`);
    }, 1000);
  });
}

//Promise Hell******************************************************
// importantAction("VipPrjpti")
//   .then((res) => {
//     console.log(res);
//     likeVideo("My First Vlog").then((res) => {
//         console.log(res);
//         shareVideo("My First Vlog").then((res) => {
//             console.log(res);
//         });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Promise Chaining****************************************************
// importantAction("VipPrjpti")
//   .then((res) => {
//     console.log(res);
//     return likeVideo("My First Vlog");
//   })
//   .then((res) => {
//     console.log(res);
//     return shareVideo("My First Vlog");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Promise Combinators**********************************************
// helps to execute more than one promise at a time and returns the result accordingly.

//1. Promise.all() - runs all of the promises parallel and at the end returns an array with all the fullfilled promises in it, but if any one of the promise fails to execute then it will fail the promise.all

// console.log(Promise.all([
//   importantAction("VipPrjpti"),
//   likeVideo("My First Vlog"),
//   shareVideo("My First Vlog"),
// ]));


//2. Promise.race() - It returns the first promise which is either resolved or rejected

// console.log(Promise.race([
//     importantAction("VipPrjpti"),
//     likeVideo("My First Vlog"),
//     shareVideo("My First Vlog"),
//   ]));

//   3. promise.allSettled - It will return all the promiese just like all() but will also return the promise if it is rejected or resoved.

// console.log(Promise.allSettled([
//     importantAction("VipPrjpti"),
//     likeVideo("My First Vlog"),
//     shareVideo("My First Vlog"),
//   ]));

//4. Promise.any() - returns the first fulfilled promise and ignores the rejected one
// console.log(Promise.allSettled([
//     importantAction("VipPrjpti"),
//     likeVideo("My First Vlog"),
//     shareVideo("My First Vlog"),
//   ]));