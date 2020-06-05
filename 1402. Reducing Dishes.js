/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function (satisfaction) {
    let desArr = satisfaction.sort((a, b) => b - a);
    let sum = 0;
    let result = 0;
    for (let i = 0; i < desArr.length && sum >= 0; i++) {
        sum += desArr[i];
        result += sum > 0 ? sum : 0;
        console.log(sum, result)
    }
    return result;
};

let satisfaction = [-1, -8, 0, 5, -7];
let x = maxSatisfaction(satisfaction);


// sum = -3 * 1 + 1 * 2 + 2 * 3 + 9 * 4 = 30;
// // 也可以表示为：
// sum =                                    9 * 1
//     +                            2 * 1 + 9 * 1
//     +                    1 * 1 + 2 * 1 + 9 * 1
//     +           -3 * 1 + 1 * 1 + 2 * 1 + 9 * 1
//     + -20 * 1 + -3 * 1 + 1 * 1 + 2 * 1 + 9 * 1;