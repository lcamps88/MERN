const express = require('express');
const router = express.Router();

//@route    GET api/carriers
//@desc     test route
//@access   Public
router.get('/', (req, res) => res.send('Carriers route'))

module.exports = router;