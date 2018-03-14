/**
 * Leibniz's PI algorithm using infinite series
 * 
 * calc(p) Returns PI, where `p` is the precision scale
 * Due to JS' limitations and time constraints, it will only print float64-size PI representations.
 */

'use asm';

/* Methods -------------------------------------------------------------------*/

function calc(p = 1) {
  let acc = 1;
  let sign = -1;
  let caret = 3;

  while(caret < p * 10000000) {
    acc += (sign * (1 / caret));
    caret += 2;
    sign *= -1;
  }

  return acc * 4;
}

/* Exports -------------------------------------------------------------------*/

module.exports = { calc };
