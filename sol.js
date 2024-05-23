Array.prototype.groupBy = function (fn) {
    const grouped = {}; 
  
    this.forEach((item) => {
      const key = fn(item); 
      
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(item); 
    });
    return grouped;
  };
  //example1
// const array = [   {"id":"1"},   {"id":"1"},   {"id":"2"} ];
// const fn = function (item) {   return item.id; }
//example2
// const array = [   [1, 2, 3],   [1, 3, 5],   [1, 5, 9] ];
// const fn = function (list) {   return String(list[0]); } ;
//example3
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const fn = function (n) {   return String(n > 5); }
console.log(array.groupBy(fn));