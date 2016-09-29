var flatten_array = function flatten(arr, item) {
  // Array to store our array as its being flattened
  var item = item || [];

  // Loop through our array
  for (var i = 0, len = arr.length; i < len; i++) {

    // Check to see if the current position in the array is of type "array"/
    // Calls self until there are no more arrays to loop through
    if ( Array.isArray(arr[i]) ) {

      // Call function and send current results back through the loop
      flatten_array(arr[i], item);
    } else {

      // Push current non-array into items
      item.push(arr[i]);
    }
  }

  return item;
};

module.exports = flatten_array;
