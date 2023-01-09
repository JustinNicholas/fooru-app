// const { default:axios } = require('axios');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

// I will add reject unauthenticatied once we get this working without
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "recipes"`;
// This will be for getting a specific users recipes so we will need the user.id then.
    pool.query(queryText)
    .then( result => {
        res.send(result.rows)
    }).catch( err => {
        console.log(err);
        res.sendStatus(500);
    })
});

module.exports = router;