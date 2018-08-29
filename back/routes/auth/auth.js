const express = require('express')
const router = express.Router()
const connection = require('../../helpers/db.js')

//POST /signup 
router.post('/signup', (req, res) => {
    //res.send('I am in POST signup')

    console.log('req body :', req.body)
    console.log('req params :', req.params)

    connection.query(`
     INSERT INTO users 
     set    email=?, 
            password=?, 
            name=?, 
            lastname=?`, [
            req.body.email,
            req.body.password,
            req.body.name,
            req.body.lastname,
        ], //(err, results) => {

        // if (err) {
        //     return res.send(err)
        // } else {
        //     return res.send({results})
        // }

        (err, results, fields) => {
            if (err) {
                res.status(500).end()
            } else {
                res.status(200).end()
            }
        })
})

module.exports = router