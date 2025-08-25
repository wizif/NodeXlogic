function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item)); // recurse
    } else {
      result.push(item);
    }
  }

  return result;
}

// Example
const input = [1, [2, [3, 4]], 5];
console.log(flattenArray(input)); // [1, 2, 3, 4, 5]
