# FizzBuzz.js

FizzBuzz solution for values n:m, w/optional divisors & text.

Return an array from values n:m for i, yielding [f] + [b] for value
(n+i % div0) === 0 && (n+i % div1) === 0, yielding [f] for value
(n+i % div0) === 0, yielding [b] for value (n+i % div1) === 0.

Takes optional arguments:

* **n**: (Number) Start value, default: `1`
* **m**: (Number) End value, defalt: `100`
* **f**: (String) Alternative Fizz string, default `'Fizz'`
* **b**: (String) Alternative Buzz string, default `'Buzz'`
* **div0**: (Number) Alternative first divisible value, default `3`
* **div1**: (Number) Alternative second divisible value, default `5`


## Example

To run the example, `npm run-script example`.

This will return an array for values 1 to 100, for values divisible by 3 and 5.

    var fizzBuzz = require('FizzBuzz.js').fizzBuzz;
    var results = fizzBuzz(1, 100, 'Fizz', 'Buzz', 3, 5);

Returns an array with the following indexed values:

    1 1
    2 2
    3 'Fizz'
    4 4
    5 'Buzz'
    6 'Fizz'
    7 7
    8 8
    9 'Fizz'
    10 'Buzz'
    11 11
    12 'Fizz'
    13 13
    14 14
    15 'FizzBuzz'
    16 16
    17 17
    18 'Fizz'
    19 19
    20 'Buzz'
    21 'Fizz'
    22 22
    23 23
    24 'Fizz'
    25 'Buzz'
    26 26
    27 'Fizz'
    28 28
    29 29
    30 'FizzBuzz'
    31 31
    32 32
    33 'Fizz'
    34 34
    35 'Buzz'
    36 'Fizz'
    37 37
    38 38
    39 'Fizz'
    40 'Buzz'
    41 41
    42 'Fizz'
    43 43
    44 44
    45 'FizzBuzz'
    46 46
    47 47
    48 'Fizz'
    49 49
    50 'Buzz'
    51 'Fizz'
    52 52
    53 53
    54 'Fizz'
    55 'Buzz'
    56 56
    57 'Fizz'
    58 58
    59 59
    60 'FizzBuzz'
    61 61
    62 62
    63 'Fizz'
    64 64
    65 'Buzz'
    66 'Fizz'
    67 67
    68 68
    69 'Fizz'
    70 'Buzz'
    71 71
    72 'Fizz'
    73 73
    74 74
    75 'FizzBuzz'
     28 Takes six optional arguments:¬
    76 76
    77 77
    78 'Fizz'
    79 79
    80 'Buzz'
    81 'Fizz'
    82 82
    83 83
    84 'Fizz'
    85 'Buzz'
    86 86
    87 'Fizz'
    88 88
    89 89
    90 'FizzBuzz'
    91 91
    92 92
    93 'Fizz'
    94 94
    95 'Buzz'
    96 'Fizz'
    97 97
    98 98
    99 'Fizz'
    100 'Buzz'


## Authors

* [Ron. A](https://github.com/0xadada) -
  [@0xadada](http://twitter.com/0xadada)


## License

MIT
