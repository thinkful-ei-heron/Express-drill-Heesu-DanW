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

app.get('/lotto', (req, res) => {
  let same=0;
  let response;
  req.query.arr.forEach(num => {
    if(Math.ceil(Math.random()*20)===num) {
      same++;
    }
    console.log(Math.ceil(Math.random()*20))
  });

  if(same < 4) {
    response="Sorry, you lose";
  } else if(same === 4) {
    response="Congratulations, you win a free ticket"
  } else if(same===5) {
    response="Congratulations! You win $100!"
  } else {
    response="Wow! Unbelievable! You could have won the mega millions!"
  }
  
  res.send(response);
});

app.listen(8000, () => {
  console.log('Express server is listening on port 8000!');
});
