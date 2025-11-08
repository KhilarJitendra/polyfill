// ---------START------->(08-Nov-2025)
// Polyfill for call()

// Steps:
// 1. Take object and arguments (optional) in normal format (not array).
// 2. Use inside function.

Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("Not callable");
  }

  // Check if arguments are passed as an array (call shouldn't accept arrays)
  if (args.length === 1 && Array.isArray(args[0])) {
    throw new Error("Please provide arguments individually, not in an array");
  }

  obj.fn = this;
  const result = obj.fn(...args);
  delete obj.fn;
  return result;
};

// Example usage
function greet(greeting, name) {
  return `${greeting}, ${name}! (ID: ${this.id})`;
}

const person = { id: 123 };

console.log(greet.myCall(person, "Hello", "Jitendra"));
