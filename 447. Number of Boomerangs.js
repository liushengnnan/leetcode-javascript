// 给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。

// 找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/number-of-boomerangs
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    var getDistanceSquare = function (p1, p2) {
        return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1])
    }
    let result = 0;
    for (let i = 0; i < points.length; i++) {
        const p1 = points[i];
        let map = {}
        for (let j = 0; j < points.length; j++) {
            const p2 = points[j];
            if (i == j) { continue }
            let distance = getDistanceSquare(p1, p2);
            if (map[distance]) {
                map[distance] += 1
            } else {
                map[distance] = 1
            }
        }
        let vals = Object.values(map);
        let tmp = vals.reduce((res, val) => res + val * (val - 1), 0)
        result += tmp;
    }
    return result;
};



let input = [[0, 0], [1, 0], [2, 0]];
let x = numberOfBoomerangs(input);
console.log(x)


/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    var count = 0;
    let pointscount = points.length;
    for (let i = 0; i < pointscount; i++) {
        let valueMap = new Map()
        for (let m = 0; m < pointscount; m++) {
            if (m != i) {
                let x1 = points[m][1] - points[i][1];
                let x2 = points[m][0] - points[i][0];
                let powvalue = x1 * x1 + x2 * x2;
                if (valueMap.has(powvalue)) {
                    count = count + (valueMap.get(powvalue) * 2);
                    valueMap.set(powvalue, (valueMap.get(powvalue)) + 1);
                }
                else {
                    valueMap.set(powvalue, 1);
                }
            }
        }
    }
    return count;
};