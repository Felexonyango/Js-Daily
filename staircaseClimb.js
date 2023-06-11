var climbStairs = function(n) {
    if (n < 4) return n;
    let a = 1, b = 1, fib;
    for(let i = 2; i <= n; i++) {
        fib = a + b;
        a = b;
        b = fib;
    }
    return fib;
};