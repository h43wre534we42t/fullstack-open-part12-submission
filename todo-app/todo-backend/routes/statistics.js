const { get } = require('../redis/index');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const added_todos = await get('added_todos');
  res.json({
    added_todos,
  });
});

module.exports = router;
