// ---------START------->(05-Nov-2025)
// Polyfill for map()

// Steps:
// 1. Take a callback function as argument (current, index, array)
// 2. Return a new array with transformed values

// Use case
const arr = [1, 2, 3, 4];
function cb(a) {
  return a * a;
}
const result = arr.map(cb);
console.log(result); // [1, 4, 9, 16]

// Polyfill
Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this)); // ✅ fixed missing parenthesis
  }
  return result;
};

// Example usage
const newArr = [1, 2, 3, 4];
const resultNew = newArr.myMap(cb);
console.log(resultNew); // [1, 4, 9, 16]

// ---------END------->
