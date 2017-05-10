#!/usr/bin/env node
var argv = require('yargs').argv;

if (argv.ships > 3 && argv.distance < 53.5) {
    console.log('Plunder more riffiwobbles!');
} else {
    console.log('Retreat from the xupptumblers!');
}

/*
$ node src/app/plunder.js --ships=4 --distance=22
Plunder more riffiwobbles!

$ node src/app/plunder.js --ships 12 --distance 98.7
Retreat from the xupptumblers!
*/