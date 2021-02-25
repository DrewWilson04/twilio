# Express body
- Read request body.
- Parse cookies data in req.cookie
- Parse json body in req.json
- Parse form data in req.form

*This middleware does not validates accept headers.
If you need to, please use body-parser.

### Install
```
npm install express-body
```

### Use
```js
var app = require('express')();

app.use(require('express-body'));

app.get('*', function(req, res, next){
    console.log(req.body);
    console.log(req.form);
    console.log(req.json);
});

app.listen(3000);
```
