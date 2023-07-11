const express = require('express');
const router = express.Router();

const skillsCTRL = require('../controllers/skills')

// GET /skills
router.get('/', skillsCTRL.index);

// GET /todos/:id
router.get('/:id', skillsCTRL.show);

module.exports = router;