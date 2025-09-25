'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  let sum = 0;

  return function adder(...args) {
    if (args.length === 0) {
      const result = sum;

      sum = 0;

      return result;
    } else {
      for (const arg of args) {
        sum += arg;
      }

      return adder;
    }
  };
}

module.exports = makeInfinityAdder;
