import express from 'express';
import cors from 'cors';
import runCron from './cron';
import { writeFollowers } from './getFollowers';
import db from './db';

const app = express();
app.use(cors());

app.get('/followers', async (req, res, next) => {
  const data = await db.get('followers').value();
  res.send(data);
});

app.listen(4500, () => {
  console.log('server started at port');
});

function startCron() {
  runCron(writeFollowers);
}

startCron();
