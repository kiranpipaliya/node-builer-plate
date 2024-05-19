const express = require('express');

const router = express.Router();

router.post('/user/signin', (req, res) => {
	res.status(200).json('Welcome');
});

module.exports = router;
