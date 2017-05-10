#!/usr/bin/env node
var argv = require('yargs').argv;
console.log('(%d,%d)', argv.x, argv.y);
console.log(argv._);

/**
 * $ node src/app/nonopt -x 6.82 -y 3.35 rum
(6.82,3.35)
[ 'rum' ]

$ node src/app/nonopt "me hearties" -x 0.54 yo -y 1.12 ho
(0.54,1.12)
[ 'me hearties', 'yo', 'ho' ]
 */