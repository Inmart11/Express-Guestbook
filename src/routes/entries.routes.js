const {Router} = require('express');
const router = Router();

const {renderIndex, renderNewEnrty, createNewEntry } = require('../controllers/entries.controller')

router.get('/',renderIndex);

router.get('/new-entry',renderNewEnrty);

router.post('/new-entry',createNewEntry);

module.exports = router;