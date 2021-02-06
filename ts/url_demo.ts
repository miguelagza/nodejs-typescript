import { v4 as uuidv4 } from 'uuid';

const myUrl = new URL(
  'http://mywebsite.com:8000/hello.html?id=100&status=active'
);

// Serialized URL
console.log('Href:', myUrl.href);

// Host (root domain)
console.log('Host:', myUrl.host);

// Hostname (does not get port)
console.log('Hostname:', myUrl.hostname);

// Pathname
console.log('Pathname:', myUrl.pathname);

//Serialized query
console.log('Search:', myUrl.search);

//Params object
console.log('Search Params:', myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log('New Search Params:', myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value: string, key: string): void => {
  console.log(`${key}:${value}`);
});

const scopes: Array<string> = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

// Custom Spotify URL

const new_url = new URL(
  `https://accounts.spotify.com/authorize?client_id=${uuidv4()}&redirect_uri=http://localhost:3000/&scope=${scopes.join(
    '%20'
  )}&response_type=token&show_dialog=true`
);

console.log(new_url.searchParams);

console.log(
  new_url.searchParams.forEach((value: string, key: string) => {
    if (key === 'client_id') {
      let client_id: string = value;
      console.log('The client id is:', client_id);
    }
  })
);
