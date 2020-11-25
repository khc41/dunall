const express = require('express');
const router = express.Router();
const api = require('./api.js')
    
router.post('/', async (req, res, _) => {
    const serverId = req.body.serverId ? req.body.serverId : '';
    const characterId = req.body.characterId ? req.body.characterId : '';

    if(characterId == '' || serverId == '')
        res.send('error 0');
    
    let url = 'servers/'+ serverId +'/characters/'+characterId+'/equip/creature?';
    var creature = JSON.parse(await api(url, res))

    let data;
    data = {
        itemImage : 'https://img-api.neople.co.kr/df/items/'+ creature.creature.itemId,
        itemName : creature.creature.itemName,
    }
    res.send(data)
});
module.exports = router