import fs from 'fs';
import path from 'path';

// Create folder

fs.mkdir(
  path.join(__dirname, '/test'),
  {},
  (err: NodeJS.ErrnoException | null): void => {
    if (err) throw err;
    console.log('Folder created...');
  }
);

// // Create and write to file

fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello world',
  (err: NodeJS.ErrnoException | null): void => {
    if (err) throw err;
    console.log('File written to...');
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      ' I Love Node.js',
      (err: NodeJS.ErrnoException | null): void => {
        if (err) throw err;
        console.log('Appended!');
      }
    );
  }
);

fs.readFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'utf8',
  (err: NodeJS.ErrnoException | null, data: string): void => {
    if (err) throw err;
    console.log(data);
  }
);

// Rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  (err: NodeJS.ErrnoException | null): void => {
    if (err) throw err;
    console.log('File renamed');
  }
);
