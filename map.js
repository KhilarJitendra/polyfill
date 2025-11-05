---------START------->(05-Nov-2025)
map
  1. take function as argument (current, index, array)
  2. return a new array

User case - 
  const arr = [1,2,3,4]
  function cb(a) {
    return a * a;
  }
  const result = arr.map(cb);
  console.log(result);

Polyfil - 
  Array.prototype.myMap = function(callback) {
      const result = [];
      for(let i=0; i < this.length; i++) {
        result.push(callback(this[i], i, this)
      }
      return result;
  }

 const newArr = [1,2,3,4];
 const resultnew = arr.map(cb);
 console.log(resultnew);

---------END------->

 
