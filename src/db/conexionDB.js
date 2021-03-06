const { Client } = require('pg')

const client = new Client({
  user: process.env.DBUSER,
  host: process.env.DBHOST,
  database: process.env.DB,
  password: process.env.DBPASS,
  port: process.env.DBPORT,
})


module.exports = client