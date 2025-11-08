---------START------->(08-Nov-2025)
filter 
  1. Take a function as an argument
  2. Return a new array if condition true

Use case - 
   const arr = [1,2,3,4]
   function cb(a) {
     return a % 2 === 0;
   }
   const result = arr.filter(cb);
   console.log(result);

Polyfill -
  Array.prototype.myFilter = function (cb) {
      const result = [];
      for(let i=0; i< this.length; i++) {
         if(cb(this[i], i, this)) {
           result.push(cb(this[i]))
         }
      }
  }

 const newArr = [1,2,3,4];
 const resultnew = arr.myFilter(cb);
 console.log(resultnew);
