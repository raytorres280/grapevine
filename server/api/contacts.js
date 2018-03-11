const router = require('express').Router()
const {Contact} = require('../db/models')
module.exports = router

// read
router.get('/', (req, res, next) => {
  Contact.findAll()
    .then(contacts => res.json(contacts))
    .catch(next)
})

// create
router.post('/', (req, res, next) => {
    Contact.create(req.body)
    .then(contact => res.json(contact))
    .catch(err => console.log(err))
})

// update
router.put('/', (req, res, next) => {
    Contact.create({})
    .then(contact => res.json(contact))
    .catch(err => console.log(err))
})

// delete
router.post('/', (req, res, next) => {
    Contact.create({})
    .then(contact => res.json(contact))
    .catch(err => console.log(err))
})
