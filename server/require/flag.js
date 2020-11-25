const express = require('express');
const router = express.Router();
const api = require('./api.js')
    
router.post('/', async (req, res, _) => {
    const serverId = req.body.serverId ? req.body.serverId : '';
    const characterId = req.body.characterId ? req.body.characterId : '';

    if(characterId == '' || serverId == '')
        res.send('error 0');
    
    let url = 'servers/'+ serverId +'/characters/'+characterId+'/equip/flag?';
    var flag = JSON.parse(await api(url))

    let data;
    let gem;
    let gems = new Array();
    
    flag.flag.gems.forEach(function(item){
        gem =  {
            itemId: item ? item.itemId : '',
            itemImage: item ? 'https://img-api.neople.co.kr/df/items/'+ item.itemId : '',
            itemAbility: item ? item.itemAbility : '',
        }
        gems.push(gem)
    })
    data = {
        itemImage: 'https://img-api.neople.co.kr/df/items/'+ flag.itemId,
        itemName: flag.itemName,
        itemAbility: flag.itemAbility,
        gem1: gems[0],
        gem2: gems[1],
        gem3: gems[2],
        gem4: gems[3]
    }

    res.send(data)
});
module.exports = router