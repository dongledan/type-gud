const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');
const sequelize = require('sequelize');

const HighScore = require('./db/HighScore');

const app = express();

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

app.get('/api/scores', async (req, res, next) => {
  try {
    const scores = await HighScore.findAll({
      order: [
        ['wpm', 'DESC']
      ]
    });
    res.send(scores);
  } catch (error) {
    next(error);
  }
})

app.put('/api/scores', async (req, res, next) => {
  try {
    const minScore = await HighScore.min('wpm');
    

    if (req.body.wpm > minScore.wpm) {
      await HighScore.update({
        name: req.body.name,
        wpm: req.body.wpm,
        }, 
        {
          where: {
          id: minScore.id
        }
      });
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const PORT = 1337;
app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`));

module.exports = app;