const middle = function(array) {
  let center = [];
  if (array.length <= 2) {
    return center;
  }
  if (array.length % 2 !== 0) {
    center.push(array[(array.length - 1) / 2]);
  } else if (array.length % 2 === 0) {
    center.push(array[((array.length) / 2) - 1], array[array.length / 2]);
  }
  return center;
};

module.exports = middle;