const { get } = require('../redis/index');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const added_todos = Number(await get('added_todos')) || 0;

  res.json({
    added_todos,
  });
});

module.exports = router;
