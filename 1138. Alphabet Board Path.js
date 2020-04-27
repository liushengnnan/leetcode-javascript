/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
    let pre_x = 0;
    let pre_y = 0;
    let steps = '';
    for (let i = 0; i < target.length; i++) {
        let j = target.charCodeAt(i) - 97;
        let x = Math.floor(j / 5);
        let y = j % 5;
        console.log(j, x, y);
        if (x == 5 && pre_y > 0) {
            steps += 'D'.repeat(x - pre_x - 1);
            steps += 'L'.repeat(pre_y - y);
            steps += 'D';
        } else {
            x > pre_x ? steps += 'D'.repeat(x - pre_x) : steps += 'U'.repeat(pre_x - x);
            y > pre_y ? steps += 'R'.repeat(y - pre_y) : steps += 'L'.repeat(pre_y - y);
        }
        steps += '!';
        pre_x = x;
        pre_y = y;
    }
    console.log(steps);
    return steps;
};

/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
    const layout = 5
    const hashMap = new Map(Array.from("abcdefghijklmnopqrstuvwxyz").map((c, i) => [c, { x: (i / layout) | 0, y: i % layout | 0 }]))
    const repeat = (s, n) => (n <= 0 ? '' : s.repeat(n))
    let p0 = { x: 0, y: 0 }
    return Array.from(target).reduce((ret, t) => {
        const p = hashMap.get(t)
        console.log(p);
        ret.push(p.y < p0.y ? repeat('L', p0.y - p.y) : '', p.x < p0.x ? repeat('U', p0.x - p.x) : '', p.x > p0.x ? repeat('D', p.x - p0.x) : '', p.y > p0.y ? repeat('R', p.y - p0.y) : '', '!')
        p0 = p
        return ret
    }, []).join('')
};

let target = "zdz";
let x = alphabetBoardPath(target);