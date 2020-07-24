import express from 'express';

const app = express();

app.listen(3333, () => {
  console.log('Server abriu na porta 3333');
});
