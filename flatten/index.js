module.exports = function flatten(arr) {
  // Array to store our array as its being flattened
  item = []

  // Loop through our array
  for (var i = 0, len = arr.length; i < len; i++) {

    // Check to see if the current position in the array is of type "array"/
    // Calls self until there are no more arrays to loop through
    if (arr[i].isArray) {
      flatten(arr[i]);
    } else {
      item.push(arr[i]);
    }
  }

  return item;
};
