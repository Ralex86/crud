//@flow
const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

function sum(x: number, y: number): number {
  console.log(y);
  return x + y;
}

app.listen(3000, function() {
  console.log('Server listening on port 3000!');
  console.log(sum(2, 'a'));
});
