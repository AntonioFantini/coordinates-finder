# coordinates-finder

####Simple Node.Js module to retrieve the latitude and the longitude of a given city from google maps api

Run the following command for installing any missing dependency:

```
  $ npm install
```

You can test the installation executing 
```
  $ npm test 
```
optionally you can add proxy to this test as first argument, e.g. 
```
$ npm test http://myuser:mypass@myproxy:myproxyport
```

**test.js** contains an example of how to use this module
```JavaScript

var coordinatesFinder = require("./index.js");
coordinatesFinder.findCoordinates("London, UK",  callback);
```
