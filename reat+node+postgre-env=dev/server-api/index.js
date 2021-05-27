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

app.get('/api/testRoutes', async (req, res) => {
  try {
    const resp = await pgClient.query('SELECT NOW()');
    console.log(resp);

    res.json({
      message: resp.rows[0],
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
