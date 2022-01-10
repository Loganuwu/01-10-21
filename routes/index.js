const router = require('express').Router()

router.use('/api', require('./dogRoutes'))
router.use('/api', require('./catRoutes'))
router.use('/api', require('./birdRoutes'))

module.exports = router
