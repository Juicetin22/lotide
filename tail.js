const tail = function(array) {
  let x = [];
  for (let i = 1; i < array.length; i++) {
    x.push(array[i]);
  }
  return x;
};

module.exports = tail;