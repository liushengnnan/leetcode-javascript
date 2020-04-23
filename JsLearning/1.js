function generateViewModel(n, func) {
    function result(index) {
        if (index % n === 0) {
            func();
        }
    }
    return result;
}

function demo() {
    console.log('demo');
}

let x = generateViewModel(2, demo);
x(1);
x(2);
x(4);