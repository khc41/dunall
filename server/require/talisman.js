const express = require('express');
const router = express.Router();
const api = require('./api.js')
    
router.post('/', async (req, res, _) => {
    const serverId = req.body.serverId ? req.body.serverId : '';
    const characterId = req.body.characterId ? req.body.characterId : '';

    if(characterId == '' || serverId == '')
        res.send('error 0');
    
    let url = 'servers/'+ serverId +'/characters/'+characterId+'/equip/talisman?';
    var talisman = JSON.parse(await api(url))

    let data;
    let dataArray = new Array();
    
    talisman.talismans.forEach(function(item){
        data = {
            itemImage: 'https://img-api.neople.co.kr/df/items/'+ item.talisman.itemId,
            itemName: item.talisman.itemName,
            rune1: item.runes ? item.runes[0].itemName : '',
            rune2: item.runes ? item.runes[1].itemName : '',
            rune3: item.runes ? item.runes[2].itemName : ''
        }
        dataArray.push(data)
    })

    res.send(dataArray)
});
module.exports = router