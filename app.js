var express = require('express');

var app = express();

app.use(express.static('public'));
app.use('/libs', express.static('node_modules'));

var port = process.env.PORT || 3013;

app.listen(port, function() {
    console.log('Server is running at http://localhost:' + port);
});
