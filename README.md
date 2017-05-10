/* Node Starter Demo of Yargs */


Run code
```
$ node src/app
```

# Specifying Params
plunder.js
```
$ node src/app/plunder --ships=4 --distance=22
$ node src/app/plunder --ships 12 --distance 98.7
```


# Short Options
short.js
```
$ node src/app/short -x 10 -y 21
$ node src/app/short -x=10 -y=21
$ node src/app/short --x=10 --y=21
```


# Boolean args
bool.js
```
$ node src/app/bool -s
$ node src/app/bool -sp
$ node src/app/bool -sp --fr
```


# Non-hyphenated Options
nonopt.js
```
$ node src/app/nonopt -x 6.82 -y 3.35 rum
// (6.82,3.35)
// [ 'rum' ]

$ node src/app/nonopt "me hearties" -x 0.54 yo -y 1.12 ho
// (0.54,1.12)
// [ 'me hearties', 'yo', 'ho' ]
```


# Verbose - counting arguments
count.js
/*
$ node src/app/count
$ node src/app/count -v
$ node src/app/count -vv
$ node src/app/count -v --verbose
*/


# Required Params
required.js
In the code, chain .demandOption(['x','y']).argv
```
#!/usr/bin/env node
var argv = require('yargs')
    .usage('Usage: $0 -w [num] -h [num]')
    .demandOption(['w','h'])
    .argv;

console.log("The area is:", argv.w * argv.h);
```


```
$ node src/app/required.js -w 55 -h 11
$ node src/app/required.js -w=55 -h=11
```


