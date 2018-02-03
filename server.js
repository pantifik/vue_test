const express = require('express'),
      msqReq = require('./db.js').query;

const app = express();
app.use(express.static('dist'));

/* ты еще пригодишься
app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end('я есть сервер');
});*/

app.get('/:id', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if(!req.params.id.match(/^\d+$/)) {
    this.state = 'error';
    return res.end('Not Correct id')
  }
  
  msqReq(req.params.id)
    .then((response) => {
      res.send(response);
    })
    .catch((err) => {
      console.log(err);
      res.send(err)
    })
});

app.listen(3000, function () {
  console.log('Server started')
});
