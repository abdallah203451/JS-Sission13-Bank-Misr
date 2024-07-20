// this function is O(N) or in some implementations O(NlogN)
function hasDuplicatesBySet(array) {
  const uniqueElements = new Set(array);
  return uniqueElements.size !== array.length;
}

// this function is always O(N)
function hasDuplicatesByMap(array) {
  const elementCount = new Map();

  for (const item of array) {
    if (elementCount.has(item)) {
      return true;
    }
    elementCount.set(item, 1);
  }

  return false;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5, 5];

console.log(hasDuplicatesByMap(array1)); // false
console.log(hasDuplicatesByMap(array2)); // true
