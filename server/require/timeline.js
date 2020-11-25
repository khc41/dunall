const express = require('express');
const router = express.Router();
const api = require('./api.js')
const qs = require('querystring');
    
router.post('/', async (req, res, _) => {
    const serverId = req.body.serverId ? req.body.serverId : '';
    const characterId = req.body.characterId ? req.body.characterId : '';

    if(characterId == '' || serverId == '')
        res.send('error 0');
    
    let url = 'servers/'+ serverId +'/characters/'+characterId+'/timeline?limit=20&code=504,505,506,507,508,511,513&';
    var timeline = JSON.parse(await api(url))
    let data;
    var dataArray = new Array();
    timeline.timeline.rows.forEach(function(item){
        if(item.data.itemRarity == '에픽'){
            data = {
                date : item.date,
                itemName : item.data.itemName,
                dungeonName : item.data.dungeonName,
                channelName : item.data.channelName,
                channelNo : item.data.channelNo
            }
            dataArray.push(data)
        }
    })
    res.send(dataArray)

});
module.exports = router