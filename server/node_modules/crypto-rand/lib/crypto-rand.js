var IEEE754_DOUBLE_BIAS, crypto, rand, randInt, randRange;

crypto = require('crypto');

IEEE754_DOUBLE_BIAS = '3ff';

// returns a random double on [0,1)
rand = function() {
  var hex_representation, mantissa;
  mantissa = crypto.rng(6).toString('hex') + '0';
  hex_representation = IEEE754_DOUBLE_BIAS + mantissa;
  return new Buffer(hex_representation, 'hex').readDoubleBE(0) - 1.0;
};

// returns a random integer that is the floor of a number on [0..n)
randRange = function(n) {
  return Math.floor(rand() * n);
};


// returns a random integer that is the floor of a number on [min..max+1)
randInt = function(min, max) {
  if (max == null) {
    max = min;
    min = 1;
  }
  if (max < min) {
    var tmp;
    tmp = min;
    min = max;
    max = tmp;
  }
  return randRange(max - min + 1) + min;
};

exports.rand = rand;

exports.randRange = randRange;

exports.randInt = randInt;

