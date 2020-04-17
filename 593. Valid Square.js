
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @return {int} 边的平方
 */
var d = function(p1, p2) {
    return (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);
}

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function(p1, p2, p3, p4) {
    let array = [d(p1, p2) , d(p1, p3) , d(p1, p4) , d(p2, p3) , d(p2, p4) ,d(p3, p4)]
    let set = new Set(array);
    return !set.has(0) && set.size == 2;
};

let x = validSquare([0,0],[1,1],[0,0],[0,0]); 