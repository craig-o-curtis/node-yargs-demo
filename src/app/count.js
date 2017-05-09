/* count.js */

// counting booleans
var argv = require('yargs')
    .count('verbose')
    .alias('v', 'verbose')
    .argv;

VERBOSE_LEVEL = argv.verbose;

function WARN()  { VERBOSE_LEVEL >= 0 && console.log.apply(console, arguments); }
function INFO()  { VERBOSE_LEVEL >= 1 && console.log.apply(console, arguments); }
function DEBUG() { VERBOSE_LEVEL >= 2 && console.log.apply(console, arguments); }

WARN("Showing only important stuff");
INFO("Showing semi-important stuff too");
DEBUG("Extra chatty mode");

/*
$ node src/app/count.js
$ node src/app/count.js -v
$ node src/app/count.js -vv
$ node src/app/count.js -v --verbose
*/



