crypto-rand
===

JavaScript's `Math.random` is not so random. Node.js offers a good source of randomness with it's `crypto` library.
However, `crypto` deals only in byte streams. Enter `crypto-rand`, a nice little library that gives 48 bits of delicous randomness.

API
---

- `.rand()`: a random double on [0,1)
- `.randRange(n)`: an integer which is the floor of a double on [0,n)
- `.randInt(min, max)`: an integer which is the floor of a double on [min,max+1)
