/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
    let mod = 1000000007;
    let mem = [null, false];
    for (let i = 2; i <= n; i++) {
        mem[i] = true; // 先假设都是质数        
    }
    for (let i = 2; i <= n; i++) {
        if (mem[i]) { // 如果当前质数
            for (j = i + i; j <= n; j += i) {
                mem[j] = false; // mem[i]的倍数都不是质数，置为false        
            }
        }
    }
    // console.log(...mem);
    let res = 1;
    let p = 0;
    let q = 0;
    for (let i = 1; i <= n; i++) {
        if (mem[i]) {
            p++;
            res *= p;
        } else {
            q++;
            res *= q;
        }
        res %= mod;
    }
    return res;
};

let x = numPrimeArrangements(5);
console.log(x);

/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
    if (n === 1) return 1;
    if (n === 2) return 1;

    const MOD = BigInt(10 ** 9 + 7);
    const primes = [2];
    const factorial = a => {
        let res = BigInt(1);
        while (a >= 1) {
            res *= BigInt(a);
            a--;
        }
        return res;
    }

    const addPrime = a => {
        for (let i = 0; primes[i] <= Math.sqrt(a); i++) {
            if (a % primes[i] === 0) return;
        }
        primes.push(a);
    }

    for (let i = 3; i <= n; i++) {
        addPrime(i);
    }

    const k = primes.length;
    return factorial(k) * factorial(n - k) % MOD;
};