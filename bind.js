// ---------START------->(08-Nov-2025)
// Polyfill for bind()

// Steps:
// 1. Take object and arguments
// 2. Return a new function that, when called, uses the provided context and arguments

const Person1 = {
  isLoggedIn: false,
  id: 123,
};

const Person2 = {
  isLoggedIn: false,
  id: 456,
};

function isCheckedIn(name) {
  return `Yes, checked in with ID ${this.id} and name is ${name}`;
}

Function.prototype.myBind = function (obj = {}, ...args1) {
  if (typeof this !== "function") {
    throw new Error("Function not callable");
  }

  obj.fn = this; // attach function to the object

  return function (...args2) {
    // return a new function that can be called later
    return obj.fn(...args1, ...args2);
  };
};

// Example usage:
const boundFn = isCheckedIn.myBind(Person1);
console.log(boundFn("Jitendra"));
