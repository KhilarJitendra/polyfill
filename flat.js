---------START------->(08-Nov-2025)
Flat 
  1. Take a argument or default 1
  2. return array

Use case 
  const arr = [1, [2, 1, [3, 4]], 4];
  const result = arr.flat(1);
  console.log(result) 

Polyfill - 
  Array.prototype.myFlat = function(depth = 1) {
      let result = [];
      for(let i=0; i< this.length; i++){
        const value = this[i]
        if (Array.isArray(value)) {
          result = result.concat(value.myFlat(depth - 1))
        } else {
          result.push(value)
        }
      }

     return result;
  }

  console.log(arr.myFlat(1));

---------END------->
