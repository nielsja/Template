import * as express from 'express';
import { SampleEngine } from 'services';
import { getDate } from 'endpoints/getDate';

const port: number = Number.parseInt(process.env.PORT ?? '3000');

const app = express();

app.get('/', (request, response) => {
  response.send('Howdy! You reached the app.');
});

app.get('/test', (req, res) => {
  res.send('test response');
});

app.get('/engine/test', (req, res) => {
  var response = SampleEngine.test();
  res.send(response);
});

app.get('/engine/testBody', (req, res) => {
  var response = SampleEngine.testBody(req.body);
  res.send(response);
});

app.get('/engine/testQuery', (req, res) => {
  var response = SampleEngine.testQuery(req.query);
  res.send(response);
});

app.get('/date', (req, res) => {
  var response = getDate('date');
  res.send(response);
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
