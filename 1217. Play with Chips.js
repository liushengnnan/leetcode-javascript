/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function (chips) {
    let evenCount = 0;
    for (const e of chips) {
        if (e % 2 === 0) {
            evenCount++;
        }
    }
    return Math.abs(chips.length - evenCount, evenCount);
};

/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function (chips) {
    let evenOdd = chips.reduce((a, x) => {
        x % 2 === 0 ? a[0]++ : a[1]++
        return a
    }, [0, 0])
    return Math.min(...evenOdd)
};

/**
* @param {number[]} chips
* @return {number}
*/
var minCostToMoveChips = function (chips) {
    const counter = [0, 0];

    for (const pos of chips) {
        ++counter[pos % 2];
    }

    return Math.min(counter[0], counter[1]);
};