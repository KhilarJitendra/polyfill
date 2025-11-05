---------START------->(05-Nov-2025)

forEach - 
  1. take function as argument
  2. it does not return anything

Use Case - 
  const arr = [1, 2, 3, 4]
  function callback(a) {
      console.log(a*a);
  }
  arr.forEach(callback);

PolyFill -

  Array.prototype.myForEach = function (callback) {
    for(let i=0; i< this.length; i++) {
      // current, index, array
      callback(this[i], i, this);
    }
  }

  const newArr = [1, 2, 3, 4]
  newArr.myForEach(callback);

---------END------->
