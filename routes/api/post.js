const express = require('express');
const router = express.Router();

const post = require('../../models/Post');

router.get('/test', (req, res) => res.send('post route testing!'));

router.get('/', (req, res) => {
  post.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No Posts found' }));
});

router.get('/:id', (req, res) => {
  post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostfound: 'No Post found' }));
});

router.post('/add', (req, res) => {
  post.create(req.body)
    .then(post => res.json({ msg: 'Post added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this post' }));
});


module.exports = router;