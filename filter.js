// ---------START------->(08-Nov-2025)
// Polyfill for filter()

// Steps:
// 1. Take a function (callback) as an argument
// 2. Return a new array with elements that pass the condition

// Use case
const arr = [1, 2, 3, 4];
function cb(a) {
  return a % 2 === 0;
}
const result = arr.filter(cb);
console.log(result); // [2, 4]

// Polyfill
Array.prototype.myFilter = function (cb) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]); // ✅ push the element, not cb(this[i])
    }
  }
  return result; // ✅ return the new filtered array
};

// Example usage
const newArr = [1, 2, 3, 4];
const resultNew = newArr.myFilter(cb);
console.log(resultNew); // [2, 4]

// ---------END------->
