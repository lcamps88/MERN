const express = require('express');
const router = express.Router();

//@route    GET api/phones
//@desc     test route
//@access   Public
router.get('/', (req, res) => res.send('Phones List route'))

module.exports = router;