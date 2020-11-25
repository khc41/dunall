const express = require('express');
const router = express.Router();
const api = require('./api.js')
const qs = require('querystring');
    
router.post('/', async (req, res, _) => {
    const characterId = req.body.characterId ? req.body.characterId : '';
    const serverId = req.body.serverId ? req.body.serverId : '';
    
    if(characterId == '' || serverId == '')
        res.send('error 0');
    let url = 'servers/' + serverId + '/characters/'+characterId+'?';
    res.send(await api(url))
});
module.exports = router