---------START------->(08-Nov-2025)
Reduce - 
  1. Take callback function and initial value
  2. Return accumulated value

Use case - 
  const arr = [1, 2, 3, 4]
  function cb(acc, value) {
    return acc = acc + value;
  }
  const result = arr.reduce(cb, 0);
  console.log(result);

Polyfill -
  Array.prototype.myReduce = function(callback, initialValue){
      let accumulator = initialValue;
      let startIndex = 0;
      if (initialValue === undefined) {
         accumulator = this[0];
         startIndex = 1;
      }
      for(let i = startIndex; i< this.length; i++) {
         accumulator = callback(accumulator, this[i], i, this)
      }
      return accumulator;
  }

  const result = arr.myReduce(cb, 0);
  console.log(result);

---------END------->
