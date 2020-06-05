/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
function getHint(secret, guess) {
    var map = {};
    var A = 0;
    var B = 0;
    for (var i = 0; i < 10; i++) map[i] = 0;
    for (i = 0; i < secret.length; i++) {
        if (secret[i] === guess[i]) A++;
        else {
            map[secret[i]]++;
            B += map[secret[i]] <= 0 ? 1 : 0;
            map[guess[i]]--;
            B += map[guess[i]] >= 0 ? 1 : 0;
        }
    }
    return A + 'A' + B + 'B';
}

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {

    let bulls = 0
    let cows = 0
    const ascii = Array(10).fill(0)

    for (let i = 0; i < secret.length; i++) {
        ascii[parseInt(secret[i])]++
    }

    for (let k = 0; k < guess.length; k++) {
        if (secret[k] === guess[k]) {
            bulls++
            cows-- // BULL GANG ⽜
        }

        if (ascii[parseInt(guess[k])] > 0) {
            ascii[parseInt(guess[k])]--
            cows++
        }
    }

    return `${bulls}A${cows}B`
};