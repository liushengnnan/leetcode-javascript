/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
// Zeller's Rule: https://en.wikipedia.org/wiki/Zeller%27s_congruence
var dayOfTheWeek = function (day, month, year) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    if (month == 1) {
        month = 13;
        year--;
    }
    else if (month == 2) {
        month = 14;
        year--;
    }
    let Y = year % 100;
    let C = Math.floor((year - Y) / 100);
    let f = (Y + Math.floor(Y / 4) + Math.floor(C / 4) - 2 * C + (26 * (month + 1) / 10) + day - 1);
    return f < 0 ? days[(f % 7 + 7) % 7] : days[f % 7];
};