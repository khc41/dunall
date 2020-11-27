const express = require('express');
const router = express.Router();
const api = require('./api.js')
const qs = require('querystring');
const server = require('./getServer.js');
    
router.post('/', async (req, res, _) => {
    const nickname = req.body.nickname ? req.body.nickname : '';
    console.log(nickname)
    if(nickname == '')
        res.send('error 0');
    let url = 'servers/all/characters?&wordType=full&characterName='+qs.escape(nickname)+'&';
    const characterInfo = JSON.parse(await api(url))

    let data;
    var dataArray = new Array();
    characterInfo.rows.forEach(function(item){
        data = {
            characterName : item.characterName,
            characterId : item.characterId,
            serverId : server[item.serverId],
            level : item.level,
            jobName : item.jobName,
            jobGrowName : item.jobGrowName
        }
        dataArray.push(data)
    })
    res.send(dataArray)
});
module.exports = router

