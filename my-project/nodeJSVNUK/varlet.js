let myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);

console.log(myMap.get('name')); // John
console.log(myMap.size);        // 2

myMap.delete('age');
console.log(myMap.has('age'));  // false

///////////////////////////////////

let mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(1); // Duplicate, will not be added

console.log(mySet.has(1)); // true
console.log(mySet.size);   // 2

mySet.delete(1);
console.log(mySet.has(1)); // false
