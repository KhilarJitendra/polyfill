// ---------START------->(08-Nov-2025)
// Polyfill for call()

// Steps:
// 1. Take object and arguments (optional)
// 2. Use inside function

Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not callable");
  }

  // Assign the current function (this) to the object
  obj.fn = this;

  // Execute the function with the given arguments
  const result = obj.fn(...args);

  // Clean up after execution
  delete obj.fn;

  return result;
};

// Example usage:
function greet(greeting, name) {
  return `${greeting}, ${name}! (ID: ${this.id})`;
}

const person = { id: 123 };

console.log(greet.myCall(person, "Hello", "Jitendra"));
