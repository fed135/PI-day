/**
 * chudnovsky's PI algorithm
 * 
 * calc(k) Returns PI, where `k` is the iteration pointer and could range from 0 to Infinity
 * Due to JS' limitations and time constraints, it only supports k = 0
 * and will only print a float64-size PI representation.
 */

'use asm';

/* Local variables -----------------------------------------------------------*/

const chudnovsky = 42698670.66633339;

/* Methods -------------------------------------------------------------------*/

function calc(k = 0) {
  return chudnovsky / (_top(k) / _bottom(k));
}

function _top(k) {
  return _factorialize(6 * k) * ((545140134 * k) + 13591409);
}

function _bottom(k) {
  return _factorialize(3 * k) * Math.pow(_factorialize(k), 3) * Math.pow(-262537412640768000, k);
}

function _factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * _factorialize(num - 1));
  }
}

/* Exports -------------------------------------------------------------------*/

module.exports = { calc };
