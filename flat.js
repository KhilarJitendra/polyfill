// ---------START------->(08-Nov-2025)
// Polyfill for flat()

// Steps:
// 1. Take a depth argument (default = 1)
// 2. Return a new flattened array up to the specified depth

// Use case
const arr = [1, [2, 1, [3, 4]], 4];
const result = arr.flat(1);
console.log(result); // [1, 2, 1, [3, 4], 4]

// Polyfill
Array.prototype.myFlat = function (depth = 1) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    const value = this[i];

    if (Array.isArray(value) && depth > 0) {
      // Recursively flatten one level less
      result = result.concat(value.myFlat(depth - 1));
    } else {
      result.push(value);
    }
  }

  return result;
};

// Example usage
console.log(arr.myFlat(1)); // [1, 2, 1, [3, 4], 4]

// ---------END------->
