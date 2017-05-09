/* node app */
var argv = require('yargs').argv;

function consoleTest() {
    if (argv.ships > 3 && argv.distance < 53.5) {
        console.log('Plunder more riffiwobbles!');
    } else {
        console.log('Retreat from the xupptumblers!');
    }
}
// node src/app --ships=4 --distance=22
// node src/app --ships 12 --distance 98.7
consoleTest();

function shortOptionsTest() {
    console.log('%d,%d', argv.x, argv.y);
}
// node src/app -x 10 -y 21
// node src/app -x=10 -y=21
// node src/app --x=10 --y=21
shortOptionsTest();

function boolsTest() {
    if (argv.speak) {
        // ?? process.stdout.write for
        process.stdout.write(argv.ch ? '一只鹦鹉叫' : 'The parrot says: ');
    }
    console.log(
        (argv.ch ? '我肏！' : 'squak!')
    );
}
// node src/app -s
// node src/app -sp
// node src/app -sp --ch
boolsTest();

// argv._ as non-hyphenated booleans
// $ node src/app "me hearties" -x 0.54 yo -y 1.12 ho
function noHyphenTest() {
    console.log('(%d,%d)', argv.x, argv.y);
    console.log(argv._);
    console.log('Index Zero of non-hyph args is: ' + argv._[0]);
}
noHyphenTest();


// counting booleans