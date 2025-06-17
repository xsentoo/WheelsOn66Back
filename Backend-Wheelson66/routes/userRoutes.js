const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

router.get('/me', auth, (req, res) => {
  res.json({
    id: req.user.id,
    name: req.user.name,
    email: req.user.email
  });
});

module.exports = router;