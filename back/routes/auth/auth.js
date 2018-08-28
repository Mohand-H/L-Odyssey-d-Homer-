const express = require('express')
const router = express.Router()
//const connection = require('./../../helpers/db.js')

//POST /signup 
router.post('/signup', (req, res, next) => {
    res.send('I am in POST signup')

// const query = connection.query('INSERT INTO users (email, password, name, lastname) VALUES (?,?,?,?)', 
//   [req.body.email, req.body.password, req.body.name, req.body.lastname], (error, results, fields) => {
//     if(error)
//     res.status(500).end()
//     else
//     res.status(200).end()
//   })
})

module.exports = router
