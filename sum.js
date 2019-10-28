const express = require('express');
const app = express();

app.get('/sum', (req, res) => {
  const sum = parseInt(req.query.a, 10) + parseInt(req.query.b, 10);
  res.send(`The sume of ${req.query.a} and ${req.query.b} is ${sum}.`);
});

app.get('/cipher', (req, res) => {
  console.log('in cipher');
  const text = req.query.text;
  const shift = req.query.shift;
  let output = '';
  const length = text.length;
  console.log(text.length);
  let i = 0;
  while (i < length) {
    console.log(i < length);
    let code = text[i].charCodeAt(0) + (shift % 26);

    output = output.concat(String.fromCharCode(code));
    i++;
  }
  console.log(output);
  res.send(output);
});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});
