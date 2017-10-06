const express = require('express');

const app = express();

app.use(express.static('public'));
app.use('/libs', express.static('node_modules'));

const port = process.env.PORT || 3013;

app.listen(port, () => {
    console.log('Server is running at http://localhost:' + port);
});
