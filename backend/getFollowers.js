import { getTime } from 'date-fns';
import db from './db.js';

const cheerio = require('cheerio');
const axios = require('axios');

export default async function getFollowers() {
  const { data } = await axios('https://twitter.com/imVkohli');
  const $ = cheerio.load(data);
  const { count } = $('[data-nav="followers"] .ProfileNav-value').data();
  console.log(count);

  return { count, time: getTime(new Date()) };
}

export async function writeFollowers() {
  const countInfo = await getFollowers();
  db.get('followers')
    .push(countInfo)
    .write();
}
