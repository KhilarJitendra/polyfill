// ---------START------->(08-Nov-2025)
// Polyfill for includes()

// Steps:
// 1. Take value and starting index (optional, default = 0)
// 2. Return boolean (true/false)

// Use case
const arr = [1, 2, 3, 4];
const result = arr.includes(1);
console.log(result); // true

// Polyfill
Array.prototype.myIncludes = function (value, fromIndex = 0) {
  for (let i = fromIndex; i < this.length; i++) {
    if (this[i] === value) {
      return true;
    }
  }
  return false;
};

// Example usage
const arr2 = [1, 2, 3, 4];
const result2 = arr2.myIncludes(1);
console.log(result2); // true

// ---------END------->
