const fibonacci = function(n) {
    n = Number(n);
    if (n < 0) return "OOPS";
    if (n <= 1) return n;
    let a = 0, b = 1, next;
    for (let i = 2; i <= n; i++) {
        next = a + b;
        a = b;
        b = next;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;
