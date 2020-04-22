// Given an absolute path for a file (Unix-style), simplify it.

// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    var arr = path.split('/');
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var p = arr[i];
        if (p === '..') {
            result.pop();
        } else if (p !== '' && p !== '.') {
            result.push(p);
        }
    }

    return '/' + result.join('/');
};


/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    let arr = path.split('/')
    let brr = arr.filter(val => {
        return val !== ''
    });
    let crr = brr.filter(val => val != '.')
    console.log(crr);
    let stack = [];
    crr.forEach(str => {
        str === '..' ? stack.pop() : stack.push(str);
    });
    console.log(stack);
    let result = '/' + stack.join('/');
    console.log(result);
    return result;
};


/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    if (!path || path.length === 0) {
        return '/';
    }

    let stack = [];
    path = path.split('/');

    for (let val of path) {
        if (val === '..') {
            stack.pop();
        } else if (val !== '.' && val !== '') {
            stack.push(val);
        }
    }

    let result = '';

    for (let val of stack) {
        result += '/' + val;
    }

    return result.length === 0 ? '/' : result;
};

let path = "/a/./b/../../c/";
let x = simplifyPath(path);