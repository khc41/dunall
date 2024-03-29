const express = require('express');
const router = express.Router();
const api = require('./api.js')
    
router.post('/', async (req, res, _) => {
    const serverId = req.body.serverId ? req.body.serverId : '';
    const characterId = req.body.characterId ? req.body.characterId : '';

    if(characterId == '' || serverId == '')
        res.send('error 0');
    
    let url = 'servers/'+ serverId +'/characters/'+characterId+'/equip/equipment?';
    var equip = JSON.parse(await api(url))

    let data;
    var dataArray = new Array();
    equip.equipment.forEach(function(item){
        data = {
            itemImage : 'https://img-api.neople.co.kr/df/items/'+ item.itemId,
            itemName : item.itemName,
            itemType : item.itemType,
            itemTypeDetail: item.itemTypeDetail,
            itemRarity: item.itemRarity,
            enchant : item.enchant,
            reinforce: item.reinforce,
            amplification: item.amplificationName,
            refine: item.refine,
            itemGradeName: item.itemGradeName,
            mythologyInfo : item.mythologyInfo
        }
        dataArray.push(data)
    })
    res.send(dataArray)
});
module.exports = router