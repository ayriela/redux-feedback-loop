const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

/* // GET all orders that have been placed, populate with data from the pizza collection
router.get('/', (req, res) => {
    // Find all orders and return them
    pool.query('SELECT * FROM "orders";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/order', error);
        res.sendStatus(500);  
    });
})
 */

//POST FEEDBACK
router.post('/submit/',  (req, res) => {
    let newFeedback = req.body;
    //console.log(`Adding feedback`, newFeedback);
  
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                     VALUES ($1, $2, $3, $4);`;
    let queryValues= [newFeedback.feeling , newFeedback.understanding, newFeedback.support, newFeedback.comments];
    pool.query(queryText, queryValues)
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding feedback`, error);
        res.sendStatus(500);
      });
  });

/* // DELETE an order
router.delete('/:id', (req, res) => {
    pool.query('DELETE FROM "orders" WHERE id=$1', [req.params.id]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('Error DELETE /api/order', error);
        res.sendStatus(500);
    })
}); */

module.exports = router;