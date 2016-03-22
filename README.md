# connect-breadcrumb

> breadcrumb middleware for express and connect

## install

```sh
npm install --save connect-breadcrumb
```

## usage

```js
var express = require('express');
var breadcrumb = require('connect-breadcrumb');

var app = express();

// instantiate with default options: same as `app.use(breadcrumb());`
app.use(breadcrumb({
  home: '⌂',
  endingSlash: false,
  beautify: function(str) {
    return str.replace(/[-_]/g, ' ');
  },
  resAttribute: 'breadcrumb'
}));

app.use(function(req, res, next){
  // for middleware
  console.log('breadcrumb', res.breadcrumb) ;
  // same as res.breadcrumb for view templates
  console.log('breadcrumb', res.locals.breadcrumb)
});

```


## options

the following optional options can be provided as {Object} (see usage above).

- home {String}: name for the home link
- endingSlash {Boolean}: true, if the url elements should contain the ending slash '/'
- beautify {Function}: beautify function
- resAttribute {String}: attribute name `res[resAttribute]` and `res.locals[resAttribute]`


## license

MIT

## author

Andi Neck | [@andineck](https://twitter.com/andineck) | andi.neck@intesso.com | intesso