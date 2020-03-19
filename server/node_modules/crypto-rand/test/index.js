crypto_rand = require('../lib/crypto-rand');
assert = require('assert');

var avgResult, withinDeltaOf, between, i;

avgResult = function(trials, func) {
  var i, acc = 0;
  for(i = 0; i < trials; ++i)
    acc += func()
  return acc / i;
}

withinDeltaOf = function(value, expected, delta) {
  if(delta == null) delta = value / 100
  return between(value, expected - delta, expected + delta);
}

between = function(value, min, max) {
  return value >= min && max >= value;
}

assert(withinDeltaOf(avgResult(100000, crypto_rand.rand), 0.5));
for(i = 0; i < 100000; ++i) {
  assert(between(crypto_rand.randRange(5), 0, 4));
  assert(between(crypto_rand.randInt(10, 20), 10, 20));
}
