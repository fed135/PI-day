/**
 * Nilakantha Series PI algorithm
 * Inspired by http://www.mathscareers.org.uk/article/calculating-pi/
 * 
 * calc(p) Returns PI, where `p` is the precision index
 * Due to JS' limitations and time constraints, it will only print float64-size PI representations.
 */

'use asm';

/* Methods -------------------------------------------------------------------*/

function calc(p = 1) {
  let acc = 3;
  let caret = 2;

  while(caret < p * 10000000) {
    acc += (4 / (caret * (caret + 1) * (caret + 2)));
    acc -= (4 / ((caret + 2) * (caret + 3) * (caret + 4)));
    caret += 4;
  }

  return acc;
}

/* Exports -------------------------------------------------------------------*/

module.exports = { calc };
