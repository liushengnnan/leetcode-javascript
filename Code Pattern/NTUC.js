// 1、第一个非重复 char
// 2、DP (01背包) Leetcode 416
// 3、flood_fill_DFS leetcode 200 
/* 4、K 个座位  arr = 已经被占的位置 = [4], 还有多少对相邻的两个座位的 eg: 12,13,35,56  return 4
    1，2，
    3，[4]，
    5，6.
*/


function NonrepeatingCharacter(str) {
    let set = {};
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (set[char]) {
            set[char] += 1;
        } else {
            set[char] = 1;
        }
    }
    for (let [key, value] of Object.entries(set)) {
        if (value === 1) {
            return key;
        }
    }
    return '';
}

function ArrayAddition(nums) {

    // code goes here  
    let max = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        max = arr[i] > max ? arr[i] : max
    }

    let len = nums.length;
    let dp = [];
    for (let i = 0; i < len + 1; i++) {
        dp[i] = [];
        for (let j = 0; j < sum + 1; j++) {
            dp[i][j] = false;
        }
    }
    // it is possible to create a subset with sum of 0 using any set (the empty set)
    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = true;
    }

    // it is not possible to create a sum > 0 without any elements for all sums j
    for (let j = 0; j < dp.length; j++) {
        dp[0][j] = false;
    }

    // you can make a sum of 0 with an empty set
    dp[0][0] = true
    // for each index (i - 1) in nums from which subsets are considered
    for (let i = 1; i <= nums.length; i++) {
        for (let j = 1; j <= sum; j++) {
            if (dp[i - 1][j] === true) {
                dp[i][j] = true;
            }
            else if (dp[i - 1][j - nums[i]] === true) {
                dp[i][j] = true;

            }
            else {
                dp[i][j] = false;
            }
        }
    }
    console.log(JSON.stringify(dp))
    return dp[nums.length][sum];
}

function BitmapHoles(strArr) {
    if (!strArr || !strArr[0]) return 0;
    // str = strArr.map()

    let arr = [];
    for (let index = 0; index < strArr.length; index++) {
        const str = strArr[index];
        arr.push(str.split(''))
    }

    strArr = arr;
    console.log(arr);

    let x_len = strArr.length;
    let y_len = strArr[0].length;
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    var flood_fill = (x, y) => {
        if (x < 0 || x >= x_len || y < 0 || y >= y_len) return;
        if (strArr[x][y] === '1') return;
        strArr[x][y] = '1';
        for (let i = 0; i < 4; i++) {
            flood_fill(x + dx[i], y + dy[i]);
        }
    }

    let count = 0;
    for (let i = 0; i < x_len; i++) {
        for (let j = 0; j < y_len; j++) {
            // console.log(strArr[i][j] )
            if (strArr[i][j] === '0') {
                count++;
                flood_fill(i, j);
            }
        }
    }

    return count;
}

// let arr = ["01111", "01101", "00011", "11110"];
// let x = BitmapHoles(arr);
// console.log(x);


function SeatingStudents(arr) {

    let K = arr[0];
    let sum = 1;
    for (let i = 3; i <= K; i++) {
        if (i % 2 == 0) {
            sum += 2;
        } else {
            sum += 1;
        }
    }

    let set = new Set();
    arr.shift();

    let nums = arr;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            nums[i] - 2 > 0 && !nums.includes(nums[i] - 2) ? set.add([nums[i] - 2, nums[i]]) : null;
            nums[i] + 2 <= K ? set.add([nums[i], nums[i] + 2]) : null;
            !nums.includes(nums[i] - 1) ? set.add([nums[i] - 1, nums[i]]) : null;
        } else {
            nums[i] - 2 > 0 && !nums.includes(nums[i] - 2) ? set.add([nums[i] - 2, nums[i]]) : null;
            nums[i] + 1 <= K ? set.add([nums[i], nums[i] + 1]) : null;
            nums[i] + 2 <= K ? set.add([nums[i], nums[i] + 2]) : null;
        }
    }
    return sum - set.size;
}

let arr = [12, 2, 5, 6, 7, 11];

let x = SeatingStudents(arr);