// const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Contact = db.define('contact', {
  first: {
    type: Sequelize.STRING,
  },
  last: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    isEmail: true

  },
  phone: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  }
})

module.exports = Contact
