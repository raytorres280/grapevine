const router = require('express').Router()
const {Contact} = require('../db/models')
module.exports = router

// read
router.get('/', (req, res, next) => {
  Contact.findAll({ order: ['last'] })
    .then(contacts => {
        res.json(contacts)
    })
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
    Contact.update(req.body, { where: { id: req.body.id }, returning: true })
    .then(response => {
        res.json(response)
    })
    .catch(err => console.log(err))
})

// delete
router.delete('/:id', (req, res, next) => {
    Contact.destroy({ where: { id: req.params.id } })
    .then(contact => {
        res.json(contact)
    })
    .catch(err => console.log(err))
})
