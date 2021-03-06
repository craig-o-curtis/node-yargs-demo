#!/usr/bin/env node
var argv = require('yargs').argv;

if (argv.s) {
    process.stdout.write(argv.fr ? 'Le perroquet dit: ' : 'The parrot says: ');
}
console.log(
    (argv.fr ? 'couac' : 'squawk') + (argv.p ? '!' : '')
);

/**
 * $ node src/app/bool -s
    The parrot says: squawk

    $ node src/app/bool -sp
    The parrot says: squawk!

    $ node src/app/bool -sp --fr
    Le perroquet dit: couac!
 */