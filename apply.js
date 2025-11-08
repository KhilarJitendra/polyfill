---------START------->(08-Nov-2025)
call
  1. Take object and argument (optional) in array format
  2. use inside functtion


Polyfill 

  - Function.prototype.myCall = function (obj = {}, ...args) {
      if (typeof this !== 'function') {
         throw new Error ('not callable')
      }
      if (Array.isArray(...args)) {
        throw new Error('Please provide argument in array')
      }
      obj.fn = this;
      const result = obj.fn(...args);
      delete obj.fn
      return result;
  }
