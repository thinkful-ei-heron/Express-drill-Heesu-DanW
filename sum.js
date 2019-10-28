const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
    const sum=parseInt(req.query.a, 10) + parseInt(req.query.b, 10);
    res.send(`The sume of ${req.query.a} and ${req.query.b} is ${sum}.`)

});

app.listen(8000, () => { 
    console.log('Express server is listening on port 8000!'); 
});
