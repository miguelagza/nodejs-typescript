import { basename, extname, join, parse } from 'path';

console.log(basename(__filename));

console.log(extname(__filename));

// Create path object

console.log(parse(__filename).base);

// Concatenate paths

console.log(join(__dirname, 'test', 'hello.html'));
