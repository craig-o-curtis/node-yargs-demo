#!/usr/bin/env node
var argv = require('yargs')
    .default('x', 10)
    .default('y', 10)
    .argv
;
console.log(argv.x + argv.y);

/**
 * $ node src/app/default_singles -x 5
    15
 */