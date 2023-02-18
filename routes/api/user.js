const express = require('express');
const router = express.Router();

const user = require('../../models/User');

router.get('/test', (req, res) => res.send('user route testing!'));

router.get('/', (req, res) => {
  user.find()
    .then(users => res.json(users))
    .catch(err => res.status(404).json({ nousersfound: 'No users found' }));
});

router.get('/:id', (req, res) => {
  user.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ nouserfound: 'No user found' }));
});

router.post('/', (req, res) => {
  user.create(req.body)
    .then(user => res.json({ msg: 'user added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this user' }));
});


module.exports = router;