// You can escape if and only if no ghosts can reach target before you. Just need to compare the Manhattan distance.

// 如果所有的幽灵都无法在你之前到达target，那么你可以逃脱。只要比较曼哈顿距离即可。


// 思路：

// 对于ghost而言，其最好的策略就是在pacman之前到达出口，然后在出口处阻止pacman。
// 因此，我们仅仅需要计算pacman是否可以在每个gphost到达出口之前到达出口。
// 如果是，则说明pacman可成功脱险；否则pacman就一定会被ghost堵死在门口。


/**
 * @param {number[][]} ghosts
 * @param {number[]} target
 * @return {boolean}
 * Taxicab geometry (曼哈顿距离)
 */
var escapeGhosts = function (ghosts, target) {
    var getDistance = function (p1, p2) {
        return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1])
    }
    const pacman = [0, 0];
    const baseDistance = getDistance(pacman, target)
    for (let i = 0; i < ghosts.length; i++) {
        const tmp = ghosts[i];
        const tmpDistance = getDistance(tmp, target);
        if (tmpDistance <= baseDistance) {
            return false
        }

    }
    return true;
};