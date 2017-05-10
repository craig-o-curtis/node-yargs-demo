#!/usr/bin/env node
var argv = require('yargs')
    .boolean(['x','y','z'])
    .argv
;
console.dir([ argv.x, argv.y, argv.z ]);
console.dir(argv._);

/**
 * $ node src/app/boolean_double -x -z one two three
// [ true, false, true ]
// [ 'one', 'two', 'three' ]
 */