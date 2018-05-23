const db = require('./database');
const Sequelize = require('sequelize');

const Student = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: 'https://placem.at/people?w=350&random=1',
    validate: {
      isUrl: true
    }
  },
  gpa: {
    type: Sequelize.FLOAT
  }
});

module.exports = Student;
