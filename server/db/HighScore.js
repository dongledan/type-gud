const Sequelize = require('sequelize');
const db = require('./index');

module.exports = db.define('high-scores', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 6]
    }
  },
  wpm: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})
