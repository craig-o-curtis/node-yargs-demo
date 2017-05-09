/* Node Starter Demo of Yargs */


Run code
```
$ node src/app
```

# Specifying Params
```
$ node src/app --ships=4 --distance=22
$ node src/app --ships 12 --distance 98.7
```

# Short Options
```
$ node src/app -x 10 -y 21
$ node src/app -x=10 -y=21
$ node src/app --x=10 --y=21
```

# Boolean args
```
$ node src/app -s
$ node src/app -sp
$ node src/app -sp --ch
```

# Non-hyphenated Options
```
$ node src/app -x 6.82 -y 3.35 rum
// (6.82,3.35)
// [ 'rum' ]

$ node src/app "me hearties" -x 0.54 yo -y 1.12 ho
// (0.54,1.12)
// [ 'me hearties', 'yo', 'ho' ]
```

# Verbose
/*
$ node src/app/count.js
$ node src/app/count.js -v
$ node src/app/count.js -vv
$ node src/app/count.js -v --verbose
*/

# Required Params
In the code, chain .demandOption(['x','y']).argv
```
// required.js

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
