const express = require('express');
const router = express.Router();
const qs = require('querystring');
    
router.post('/', async (req, res, _) => {
    const server = 'https://img-api.neople.co.kr/df/'
    const apiKey = '&apikey=Dvn53O4pcITPMGV8N8kKHMI0ruCTaJC1'

    const characterId = req.body.characterId ? req.body.characterId : '';
    const serverId = req.body.serverId ? req.body.serverId : '';
    var imageUrl
    if(characterId == '' || serverId == '')
        res.send('error 0');
    let url = 'servers/' + serverId + '/characters/'+qs.escape(characterId)+'?zoom=2';
    imageUrl = server+url+apiKey
    res.send(imageUrl)
});
module.exports = router