const router = require('express').Router()
const { Cat } = require('../models')

// GET all dogs
router.get('/cats', async function (req, res) {
  const cats = await Cat.find({})
  res.json(cats)
})

// GET one dog by id
router.get('/cats/:id', async function (req, res) {
  const cat = await Cat.findById(req.params.id)
  res.json(cat)
})

// POST one dog
router.post('/cats', async function (req, res) {
  const cat = await Cat.create(req.body)
  res.json(cat)
})

// PUT one dog by id
router.put('/cats/:id', async function (req, res) {
  await Cat.findByIdAndUpdate(req.params.id, req.body)
  res.sendStatus(200)
})

// DELETE one dog by id
router.delete('/cats/:id', async function (req, res) {
  await Cat.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router
