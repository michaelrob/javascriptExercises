var sorting = function sort(arr) {

  // Return nothing if an array of nothing is passed into the function
  if ( arr.length == 0 ) {
    return [];
  }

  var left = [], right = [];
  var pivot = arr[0];

  // Loop through array, if current array value is less than pivot place it in
  // left, if its bigger or equal to, place it in right.
  for ( var i = 1; i < arr.length; i++ ) {
    if ( arr[i] < pivot ) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  // Return left and right concatenated. 
  return sort(left).concat(pivot, sort(right));
};

module.exports = sorting;
