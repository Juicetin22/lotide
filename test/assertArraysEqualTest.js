const assertArraysEqual = require('../assertArraysEqual');

const aa = [1, 2, 3];
const bb = [1, 2, 3];
assertArraysEqual(aa, bb);

const cc = [1, "2", 3];
const dd = [1, 2, 3];
assertArraysEqual(cc, dd);

const ee = [1, 2, 3, 4];
const ff = [1, 2, 3];
assertArraysEqual(ee, ff);

const gg = [1, "hi", 2, "no"];
const hh = [2, "hi", 1, "no"];
assertArraysEqual(gg, hh);