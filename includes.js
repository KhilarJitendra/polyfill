---------START------->(08-Nov-2025)
includes 
  - Take value and index (optional or it's start from zero)
  - return boolean (true/false)

Use case - 
  const arr = [1, 2, 3, 4]
  const result = arr.includes(1);
  console.log(result) // true

Polyfill - 
  Array.prototype.myIncludes = function (value, formIndex = 0) {
    for(let i=formIndex; i< this.length;i ++) {
      if (this[i] === value) {
        return true
      }
    }
    return false;
  }

  const arr = [1, 2, 3, 4]
  const result = arr.myIncludes(1);
  console.log(result) // true

---------END------->
