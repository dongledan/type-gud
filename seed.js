const db = require('./server/db');
const HighScore = require('./server/db/HighScore')

const scores = [
  {
    name: 'test',
    wpm: '51'
  },
  {
    name: 'test',
    wpm: '20'
  },
  {
    name: 'test',
    wpm: '50'
  },
  {
    name: 'test',
    wpm: '10'
  },
  {
    name: 'test',
    wpm: '52'
  },
  {
    name: 'test',
    wpm: '30'
  },
  {
    name: 'test',
    wpm: '35'
  },
  {
    name: 'test',
    wpm: '42'
  },
  {
    name: 'test',
    wpm: '0'
  },
  {
    name: 'test',
    wpm: '5'
  },
];

const seed = async () => {
  await db.sync({force: true})

  // seed your database here!
  await Promise.all(scores.map(score =>
    HighScore.create(score)
  ));

  console.log('Seeding success!')
  db.close()
};

seed()
  .catch(err => {
    console.error('Oh noes! Something went wrong!')
    console.error(err)
    db.close()
  });