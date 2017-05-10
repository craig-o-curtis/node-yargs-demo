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




