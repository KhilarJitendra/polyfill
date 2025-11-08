// ---------START------->(08-Nov-2025)
// Polyfill for reduce()

// Steps:
// 1. Take a callback function and an optional initial value
// 2. Return the accumulated (reduced) value

// Use case
const arr = [1, 2, 3, 4];
function cb(acc, value) {
  return acc + value;
}
const result = arr.reduce(cb, 0);
console.log(result); // 10

// Polyfill
Array.prototype.myReduce = function (callback, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  // If no initial value is provided, use the first element as the initial value
  if (initialValue === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  // Iterate and accumulate
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
};

// Example usage
const result2 = arr.myReduce(cb, 0);
console.log(result2); // 10

// ---------END------->
