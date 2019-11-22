import cron from 'node-cron';

export default function runCron(cronFn) {
  cron.schedule('* * * * *', () => {
    cronFn();
    console.log('fetching followers every minute');
  });
}
