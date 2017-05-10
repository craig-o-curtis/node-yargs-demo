/* Node Starter Demo of Yargs */


Run code
```
$ node src/app
```

Note - 
#!/usr/bin/env node is an instance of a shebang line: the very first line in an executable plain-text file on Unix-like platforms that tells the system what interpreter to pass that file to for execution, via the command line following the magic #! prefix (called shebang). -- http://stackoverflow.com/questions/33509816/what-exactly-does-usr-bin-env-node-do-at-the-beginning-of-node-files

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
area.js
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
$ node src/app/area.js -w 55 -h 11
$ node src/app/area.js -w=55 -h=11
```


# Required Non-Hyphenated Args
demand_count.js
// illustrates demandCommand(int) as number of required non-hyph args
```
$ node src/app/demand_count a
// Not enough non-option arguments: got 1, need at least 2

$ node src/app/demand_count a b
// { _: [ 'a', 'b' ], '$0': 'demand_count.js' }

$ node src/app/demand_count.js a b c
// { _: [ 'a', 'b', 'c' ], '$0': 'demand_count.js' }

```


# Set default Values
// default_singles.js
Adds or concats to original default values
```
$ node src/app/default_singles -x 5
// 15 
```


# Default Hash Object
// default_hash.js
```
$ node src/app/default_hash -y 7
// 17
```


# More Booleans
// boolean_single.js
```
#!/usr/bin/env node
var argv = require('yargs')
    .boolean('v')
    .argv
;
console.dir(argv.v);
console.dir(argv._);
```

```
$ node src/app/boolean_single -v "me hearties" yo ho
true
// [ 'me hearties', 'yo', 'ho' ]
```


// boolean_double.js
```
#!/usr/bin/env node
var argv = require('yargs')
    .boolean(['x','y','z'])
    .argv
;
console.dir([ argv.x, argv.y, argv.z ]);
console.dir(argv._);
```

```
$ node src/app/boolean_double -x -z one two three
// [ true, false, true ]
// [ 'one', 'two', 'three' ]
```


## Real Demos
# Count Number of Lines in a File
// line_count.js
```
$ node src/app/line_count -f src/app/count.js
// 27
$ node src/app/line_count --file src/app/count.js
// 27

```


