// ---------START------->(05-Nov-2025)
// Polyfill for forEach()

// Steps:
// 1. Take a callback function as an argument
// 2. Execute the callback for each element
// 3. Does not return anything

// Use Case
const arr = [1, 2, 3, 4];
function callback(a) {
  console.log(a * a);
}
arr.forEach(callback); // 1, 4, 9, 16

// Polyfill
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    // callback(currentValue, index, array)
    callback(this[i], i, this);
  }
};

// Example usage
const newArr = [1, 2, 3, 4];
newArr.myForEach(callback); // 1, 4, 9, 16

// ---------END------->
