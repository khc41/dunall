const express = require('express');
const router = express.Router();
const api = require('./api.js')
    
router.post('/', async (req, res, _) => {
    const serverId = req.body.serverId ? req.body.serverId : '';
    const characterId = req.body.characterId ? req.body.characterId : '';

    if(characterId == '' || serverId == '')
        res.send('error 0');
    
    let url = 'servers/'+ serverId +'/characters/'+characterId+'/equip/avatar?';
    var avatar = JSON.parse(await api(url))

    let data;
    var dataArray = new Array();
    avatar.avatar.forEach(function(item){
        data = {
            itemImage: 'https://img-api.neople.co.kr/df/items/'+ item.itemId,
            itemName: item.itemName,
            emblem1: item.emblems[0] ? item.emblems[0].itemName : '',
            emblem2: item.emblems[1] ? item.emblems[1].itemName : '',
            clone: item.clone.itemName
        }
        dataArray.push(data)
    })
    res.send(dataArray)
});
module.exports = router