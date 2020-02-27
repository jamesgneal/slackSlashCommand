import express from 'express';

const app = express();

const jsonResponse = JSON.parse(
  `{"response_type": "in_channel","text": "Hello World from AWS Lambda"}`
);

const jsonResponse2 = {
  response_type: 'in_channel',
  text: 'This is a brand new bag @graham'
};

app.get('/', (req, res) => {
  res.send(jsonResponse2);
});

module.exports = app;
