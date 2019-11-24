import cron from 'node-cron';

export default function runCron(cronFn) {
  cron.schedule('0 * * * *', () => {
    cronFn();
    console.log('fetching followers every 1 hour');
  });
}
