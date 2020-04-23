/**
 * @param {number} N
 * @return {number}
 */
// const binaryGap = N =>
//     Math.max(
//         0,
//         ...N.toString(2)
//             .split('1')
//             .slice(1, -1)
//             .map(gap => gap.length + 1),
//     );


var binaryGap = function (N) {
    let x = N.toString(2)
    let y = x.split(1)
    let z = y.slice(1, -1)
    let result = z.reduce((prev, current) => Math.max(prev, current.length + 1), 0)
    console.log(x, y, z, result);
    return result;
};

let N = 64;
let x = binaryGap(N);