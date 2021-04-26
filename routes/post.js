const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', (req, res) => {
  res.send('Postin\' baby! :D' );
});

router.post('/', (req, res) => {
  const post = new Post({
    title :req.body.title,
    description: req.body.description,
    idNumber: req.body.idNumber
  });
  post.save()
  .then(data => {
    rest.json(data);
  })
  .catch(err => {
    res.json ({message: err})
  });
});
module.exports = router;
