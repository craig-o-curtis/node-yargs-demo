#!/usr/bin/env node
var argv = require('yargs')
    .usage('Usage: $0 -w [num] -h [num]')
    .demandOption(['w','h'])
    .argv;

console.log("The area is:", argv.w * argv.h);

/**
 * $ node src/app/options.js -w 55 -h 11
 * $ node src/app/options.js -w=55 -h=11
 */