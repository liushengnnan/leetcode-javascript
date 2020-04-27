/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function (IP) {
    const ipv4 = /^((\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.){4}$/;
    const ipv6 = /^([\da-f]{1,4}:){8}$/i;
    return ipv4.test(IP + '.') ? 'IPv4' : ipv6.test(IP + ':') ? 'IPv6' : 'Neither';
};


var validIPAddress = function (IP) {
    if (IP.indexOf('.') > 0)
        return validIPv4(IP) ? 'IPv4' : 'Neither';
    else
        return validIPv6(IP) ? 'IPv6' : 'Neither';
};

var validIPv4 = function (IP) {
    let strs = IP.split('.');
    if (strs.length !== 4) return false;
    for (let str of strs) {
        if (str.length === 0) return false;
        if (str.match(/[^0-9]/)) return false;
        if (str.length > 1 && str.charAt(0) === '0') return false;
        if ((+str) > 255) return false;
    }
    return true;
};

var validIPv6 = function (IP) {
    let strs = IP.split(':');
    if (strs.length !== 8) return false;
    for (let str of strs) {
        if (str.length === 0) return false;
        if (str.length > 4) return false;
        if (str.match(/[^0-9A-F]/i)) return false;
    }
    return true;
};