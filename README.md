# coordinates-finder

####Simple Node.Js module to retrieve the latitude and the longitude of a given place from google maps api

Run the following command to install any missing dependency:

```
  $ npm install
```

Run the following command to test installation
```
  $ npm test 
```
Optionally you can add proxy passing it as first argument, e.g.

```
  $ npm test http://myuser:mypass@myproxy:myproxyport
```

**test.js** contains an example of how to use this module
```JavaScript

var coordinatesFinder = require("./index.js");
coordinatesFinder.findCoordinates("London, UK",  callback);
```
