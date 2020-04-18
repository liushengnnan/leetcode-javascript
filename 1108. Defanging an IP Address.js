/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let s = '';
    for (const e of address) {
        e === '.' ? s += '[.]' : s += e;
    }
    return s;
};

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    let arr = address.split('.');
    let output = arr.join('[.]');
    return output;
};


/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    return address.split('.').join('[.]')

};

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
    return address.replace(/\./g, "[.]");
};

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = address => {
    let re = new RegExp(/\./g);
    let defang = "[.]";
    return address.replace(re, defang);
};

let address = "1.1.1.1"
let x = defangIPaddr_(address);
console.log(x);