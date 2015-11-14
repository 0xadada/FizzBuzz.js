/* FizzBuzz.js
 * Return an array from values n:m for i, yielding [f] + [b] for value
 * (n+i % div0) === 0 && (n+i % div1) === 0, yielding [f] for value
 * (n+i % div0) === 0, yielding [b] for value (n+i % div1) === 0.
 */
var fizzBuzz = function(n, m, f, b, div0, div1) {
    n = (typeof n === 'undefined' ? 1 : n);
    m = (typeof m === 'undefined' ? 100 : m);
    f = (typeof f === 'undefined' ? 'Fizz' : f);
    b = (typeof b === 'undefined' ? 'Buzz' : b);
    div0 = (typeof div0 === 'undefined' ? 3 : div0);
    div1 = (typeof div1 === 'undefined' ? 5 : div1);
    var a = [],
        i = (n - 1),
        current,
        d0,
        d1;
    for(
        i;
        ++i <= m;
        d0 = !(i % div0),
        d1 = !(i % div1),
        current =  (d0 ? d1 ? f+b : f : d1 ? b : i),
        console.log(i, current),
        a.push(current)
    );
    return a;
}

var exp = typeof module === 'object' && module.exports ?
    module.exports :
    window;
exp.fizzBuzz = fizzBuzz;