const nums = [1, 2, 3, 4];

// map
const multiply = nums.map((num) => {
  return num * 2;
});
console.log(multiply);

//pollyfill for map
// adding this myMap(custom name) function to the current methods of JS file
// Array.map((num,i,arr)=>{ })
Array.prototype.myMap = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(callback(this[i], i, this));
    // cb(current element,index,array👆🏻)
  }
  return temp;
};

const newMultiply = nums.myMap((num) => {
  return num * 2;
});
console.log(newMultiply);

//""""""""""""""""""""""""""filter"""""""""""""""""""""""""""""""
const filtered = nums.filter((num) => {
  return num > 2;
});
console.log(filtered);

//pollyfill for filter
Array.prototype.myFilter = function (callback) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      temp.push(this[i]);
    }
    // cb(array[i],index,array👆🏻)
  }
  return temp;
};

const newFilter = nums.myFilter((num) => {
  return num > 2;
});
console.log(newFilter);

//""""""""""""""""""""""""""""reduce"""""""""""""""""""""""""""""
const reduced = nums.reduce((accumulator, current, i, arr) => {
  return accumulator + current;
}, 0);
console.log(reduced);

//if we donot pass accumulator value to reduce function so it takes first value by default as initial value

// pollyfill for reduce
Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator
      ? callback(accumulator, this[i], i, this)
      : this[i];
  }
  return accumulator;
};

const newReduced = nums.myReduce((accumulator, current, i, arr) => {
    return accumulator + current;
  }, 0);
  console.log(newReduced);


//   map vs forEach
//   map returns a new array 
//   We can do map chaining in map

//   forEach modifies the original array
//   we cannot do chaining in forEach

