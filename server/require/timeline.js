const express = require('express');
const router = express.Router();
const api = require('./api.js')
const qs = require('querystring');
    
router.post('/', async (req, res, _) => {
    const characterId = req.body._characterId ? req.body._characterId : '';
    if(characterId == '')
        res.send('error 0');
        let url = 'servers/all/characters/&characterId='+qs.escape(characterId)+'/timeline?limit=10&code=504,505,506,507,508,511,513';
    await api(url, res)
});
module.exports = router