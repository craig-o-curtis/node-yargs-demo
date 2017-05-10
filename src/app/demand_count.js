#!/usr/bin/env node
var argv = require('yargs')
    .demandCommand(2)
    .argv;
console.dir(argv);

/**
 * 
 $ ./demand_count.js a

Not enough non-option arguments: got 1, need at least 2

$ ./demand_count.js a b
{ _: [ 'a', 'b' ], '$0': 'demand_count.js' }

$ ./demand_count.js a b c
{ _: [ 'a', 'b', 'c' ], '$0': 'demand_count.js' }
 */