import * as express from 'express';

const port: number = Number.parseInt(process.env.PORT ?? '3000');

const app = express();

app.get('/', (request, response) => {
  response.send('Howdy! You reached the app.');
  // response.sendFile(__dirname + '/index.html');
});

app.get('*', (request, response) => {
  response.send('Whoops! No such page exists. Your bad.');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
