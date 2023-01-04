"use strict";

const { BadRequestError } = require("./expressError");


/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */
function convertStrNums(strNums) {
  const nums = [];
  
  for (let num of strNums) {
    if (isNaN(+num)) {
      throw new BadRequestError(`${num} is not a number.`)
    }
    nums.push(num);
  }

  return nums;
}


module.exports = { convertStrNums };