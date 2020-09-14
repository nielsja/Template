import * as express from 'express';
import { TestEngine } from './services';

const port: number = Number.parseInt(process.env.PORT ?? '3000');

const app = express();
app.use(express.json());

app.get('/', (request, response) => {
  response.send('Howdy! You reached the app.');
});

app.get('/test', (req, res) => {
  res.send('test response');
});

app.get('/engine/test', (req, res) => {
  var response = TestEngine.test();
  res.send(response);
});

app.get('/engine/testBody', (req, res) => {
  var response = TestEngine.testBody(req.body);
  res.send(response);
});

app.get('/engine/testQuery', (req, res) => {
  var response = TestEngine.testQuery(req.query);
  res.send(response);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
