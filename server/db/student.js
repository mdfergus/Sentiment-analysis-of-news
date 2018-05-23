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
    type: Sequelize.STRING,
    defaultValue: 'https://www.fillmurray.com/200/300',
    validate: {
      isUrl: true
    }
  },
  gpa: {
    type: Sequelize.FLOAT
  }
});

module.exports = Student;
