/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand7 = function() {
    return Math.random(7) + 1;
};

// rand7() will get random 1 ~ 7
// (rand7() - 1) * 7 + rand7() - 1 will get random 0 ~ 48
// We discard 40 ~ 48, now we have rand40 equals to random 0 ~ 39.
// We just need to return rand40 % 10 + 1 and we get random 1 ~ 10.

// In 9/49 cases, we need to start over again.
// In 40/49 cases, we call rand7() two times.
var rand10 = function() {
    let res = 40;
    while(res >= 40) { res = 7 * (rand7() - 1) + (rand7() - 1); }
    return res % 10 + 1;
};


var rand10 = function() {
    let i,j;
    while( (i = rand7()) > 6);  // P(i is even) = P(i is odd) = 0.5
    while( (j = rand7()) > 5);  // P(j==1) = P(j==2) = P(j==3) = P(j==4) = P(j==5) = 0.2
    return (i&1) ? j : j+5;
};

