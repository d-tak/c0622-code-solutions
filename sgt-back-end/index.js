const pg = require('pg');
const express = require('express');
const app = express();

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

// GET (returns all rows from the "grades" table)
app.get('/api/grades/', (req, res, next) => {
  const sql = `
  select *
  from "grades"
  `;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200);
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.json({ error: 'An unexpected error occurred.' });
    });
});

// POST (inserts a new grade and returns created grade)
app.use(express.json());
app.post('/api/grades', (req, res) => {
  if (req.body.name === undefined || req.body.course === undefined || req.body.score === undefined) {
    res.status(400);
    res.json({ error: 'Name, Course, AND Score are REQUIRED fields' });
    return;
  } else if (!Number.isInteger(req.body.score) || Number(req.body.score) < 0 || Number(req.body.score) > 100) {
    res.status(400);
    res.json({ error: 'Score MUST be a positive integer between 0 and 100' });
    return;
  }

  const sql = `
  insert into "grades" ("name", "course", "score")
  values($1, $2, $3)
  returning *;`;

  const params = [req.body.name, req.body.course, req.body.score];

  db.query(sql, params)
    .then(result => {
      res.status(201);
      res.json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.json({ error: 'An unexpected error occurred.' });
    });
});

/**
   * POST method
   *
   * Check if the request is valid
   *  -- If name course and score are missing
   *  -- send back 400 response with proper explanation
   *  -- If score is negative or bigger than 100
   *  -- send back 400 response with explanation
   *
   * Inserting items into the database
   *   Declare a new variable for you SQL query (insert statement)
   *   Declare a params variable as an array containing
   *   -- score
   *   -- name
   *   -- course
   *  Query the database with the sql to input params
   *  When you get the result of the db.query
   *    -- send a 201 status code
   *    -- send a body with results.row[0]
   * Use a catch method on the promise
   *  --send back 500 status with the body as the error message
   *
   */

// PUT (updates and returns the updated grade)
app.put('/api/grades/:gradeId', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  const gradeId = Number(req.params.gradeId);

  if (name === undefined || course === undefined || score === undefined) {
    res.status(400);
    res.json({ error: 'Name, Course, AND Score are REQUIRED fields' });
    return;
  } else if (!Number.isInteger(score) || Number(score) < 0 || Number(score) > 100) {
    res.status(400);
    res.json({ error: 'Score MUST be a positive integer between 0 and 100' });
    return;
  }

  const sql = `
  update  "grades"
  set     "name" = $1,
          "course" = $2,
          "score" = $3
  where   "gradeId" = $4

  returning *`;

  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(result => {
      if (!result.rows[0]) {
        res.status(404);
        res.json({ error: `Score with gradeId: ${gradeId} does not exist in the database` });
      } else {
        res.status(200);
        res.json(result.rows[0]);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500);
      res.json({ error: 'An unexpected error occurred.' });
    });
});

// DELETE (deletes grade from "grades" table.)
app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400);
    res.json({ error: 'GradeId MUST be a positive integer.' });
  } else {
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *;`;

    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        if (!result.rows[0]) {
          res.status(404);
          res.json({ error: `Score with gradeId: ${gradeId} does not exist in the database` });
        } else {
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500);
        res.json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
