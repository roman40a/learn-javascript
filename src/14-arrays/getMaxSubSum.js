'use strict';

function getMaxSubSum(arr) {
    let maxSum = 0;
    let subSum = 0;
    for (let num of arr) {
        subSum += num;
        maxSum = Math.max(maxSum, subSum);
        if (subSum < 0) subSum = 0;
    };
    return maxSum;
};

alert(getMaxSubSum([-1, 2, 3, -9]));// = 5 (сумма выделенных)
alert(getMaxSubSum([2, -1, 2, 3, -9]));// = 6
alert(getMaxSubSum([-1, 2, 3, -9, 11]));// = 11
alert(getMaxSubSum([-2, -1, 1, 2]));// = 3
alert(getMaxSubSum([100, -9, 2, -3, 5]));// = 100
alert(getMaxSubSum([1, 2, 3])); // = 6 (берём все);