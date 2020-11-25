const express = require('express');
const router = express.Router();
const api = require('./api.js')
    
router.post('/', async (req, res, _) => {
    const serverId = req.body.serverId ? req.body.serverId : '';
    const characterId = req.body.characterId ? req.body.characterId : '';

    if(characterId == '' || serverId == '')
        res.send('error 0');
    
    let url = 'servers/'+ serverId +'/characters/'+characterId+'/status?';
    var status = JSON.parse(await api(url))
    res.send(status)
});
module.exports = router