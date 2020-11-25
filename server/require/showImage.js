const express = require('express');
const router = express.Router();
const api = require('./imageApi.js')
const qs = require('querystring');
    
router.post('/', async (req, res, _) => {
    const characterId = req.body._characterId ? req.body._characterId : '';
    if(characterId == '')
        res.send('error 0');
    let url = 'servers/all/characters/&characterId='+qs.escape(characterId);
    await api(url, res)
});
module.exports = router