const express = require('express');
const { Pool } = require('pg');
const keys = require('./keys');

const app = express();

const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});

// const initTb = async () => {
//   await pgClient.query('CREATE TABLE IF NOT EXISTS tbl_values (number INT)');

//   await pgClient.query('INSERT INTO tbl_values (number) VALUES(21)');
//   await pgClient.query('INSERT INTO tbl_values (number) VALUES(11)');
//   await pgClient.query('INSERT INTO tbl_values (number) VALUES(411)');
// };

// initTb();

app.get('/testRoutes', async (req, res) => {
  try {
    const resp = await pgClient.query('SELECT * FROM tbl_values');

    console.log(resp);

    const message = resp.rows?.map((x) => {
      return x.number;
    });
    res.json({
      message,
    });
  } catch (error) {
    res.json({
      error,
    });
  }
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});
