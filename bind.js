---------START------->(08-Nov-2025)
bind
  1. Take object and argument
  2. return function 

Polyfill - 

 const Person1 = {
  isLoggedIn: false,
  id: 123,
};

const Person2 = {
  isLoggedIn: false,
  id: 456,
};

function isChekdIn(name) {
  return `yes checked in ${this.id} and name is ${name}`;
}

Function.prototype.myBind = function (obj = {}, ...args1) {
  if (typeof this !== "function") {
    throw new Error("Function not callable");
  }
  obj.fn = this;
  return function (...args2) {
    return obj.fn(...args1, ...args2);
  };
};

const result1 = isChekdIn.myBind(Person1);
console.log(result1("Jitendra"));
