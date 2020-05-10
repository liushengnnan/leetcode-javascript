// Leetcode 46
// Language: Javascript
// Problem: https://leetcode.com/problems/permutations/
// Author: Chihung Yu
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
    var result = [];
    generatePermute(nums, [], result);

    return result;
};

var generatePermute = function (nums, currentResult, finalResult) {
    if (nums.length === 0) {
        finalResult.push(currentResult.slice());
        return;
    }

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];

        currentResult.push(num);
        var newNums = nums.slice(0, i).concat(nums.slice(i + 1));
        generatePermute(newNums, currentResult, finalResult);
        currentResult.pop();
    }
}

// can be optimized by using an array to keep track of visited elements in the array which ultimately cut down the time slicing array
// consider array is of size n -> n^2 vs n! 


var permute = function (nums) {
    var result = [];
    var visited = [];

    generate(nums, 0, visited, [], result);

    return result;
};

var generate = function (nums, index, visited, output, result) {
    if (nums.length === output.length) {
        result.push(output.slice());
        return;
    }

    for (var i = 0; i < nums.length; i++) {
        if (!visited[i]) {
            visited[i] = true;
            output.push(nums[i]);
            generate(nums, index + 1, visited, output, result);
            output.pop();
            visited[i] = false;
        }

    }
}


// Another clear solution
var permute = function (nums) {
    return permuteAux(nums, []);
};

var permuteAux = function (nums, partialNums) {
    if (nums === null || nums.length === 0) {
        return [partialNums];
    }
    var listArrays = [];
    for (var i = 0; i < nums.length; i++) {
        var withoutI = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
        var partial = partialNums.concat([nums[i]]);
        var sol = permuteAux(withoutI, partial);
        if (sol.legnth !== 0) {
            listArrays = listArrays.concat(sol);
        }
    }
    return listArrays;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    if (!nums) return [];
    let res = [];
    var permuteHelper = (outArr, inArr) => {
        if (outArr.length == nums.length) {
            res.push(outArr) 
            return;
        }
        for (let i = 0; i < inArr.length; i++) {
            let withoutI = inArr.slice(0, i).concat(inArr.slice(i + 1, inArr.length));
            permuteHelper(outArr.concat([inArr[i]]), withoutI)
        }
    }
    permuteHelper([], nums)
    return res;
};

let input = [1, 2, 3];
let x = permute(input);
console.log(...x);


