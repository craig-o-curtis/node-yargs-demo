#!/usr/bin/env node
var argv = require('yargs')
    .usage('Usage: $0 <command> [options]')
    .command('count', 'Count the lines in a file')
    .example('$0 count -f foo.js', 'count the lines in the given file')
    .alias('f', 'file')
    .nargs('f', 1)
    .describe('f', 'Load a file')
    .demandOption(['f'])
    .help('h')
    .alias('h', 'help')
    .epilog('copyright 2015')
    .argv;

var fs = require('fs');
var s = fs.createReadStream(argv.file);

var lines = 0;
s.on('data', function (buf) {
    lines += buf.toString().match(/\n/g).length;
});

s.on('end', function () {
    console.log(lines);
});

/**
$ node src/appline_count.js count
Usage: line_count.js <command> [options]

Commands:
  count    Count the lines in a file

Options:
  -f, --file  Load a file        [required]
  -h, --help  Show help           [boolean]

Examples:
  line_count.js count -f foo.js  count the lines in the given file

copyright 2015

Missing required arguments: f

$ node src/app/line_count count --file line_count.js
26

$ node src/app/line_count count -f line_count.js
26


 */