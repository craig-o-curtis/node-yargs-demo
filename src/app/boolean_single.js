#!/usr/bin/env node
var argv = require('yargs')
    .boolean('v')
    .argv
;
console.dir(argv.v);
console.dir(argv._);

/**
 * $ node src/app/boolean_single -v "me hearties" yo ho
true
// [ 'me hearties', 'yo', 'ho' ]
 */