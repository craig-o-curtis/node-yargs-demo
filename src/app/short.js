#!/usr/bin/env node
var argv = require('yargs').argv;
console.log('(%d,%d)', argv.x, argv.y);

/**
 * $ node src/app/short -x 10 -y 21
    // (10,21)
 */