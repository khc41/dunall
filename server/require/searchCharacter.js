const express = require('express');
const router = express.Router();
const api = require('./api.js')
const qs = require('querystring');
const server = require('./getServer.js');
const { getServers } = require('dns');
    
router.post('/', async (req, res, _) => {
    const nickname = req.body._nickname ? req.body._nickname : '';
    if(nickname == '')
        res.send('error 0');
    let url = 'servers/all/characters?&wordType=full&characterName='+qs.escape(nickname);
    const characterInfo = JSON.parse(await api(url))
    // res.send(characterInfo.body.rows.arrays.forEach(element => {
    //         element.serverId,
    //         element.characterName,
    //         element.jobName,
    //         element.jobGrowName
    //     }))
    
    let data;
    var dataArray = new Array();
    characterInfo.rows.forEach(function(item){
        data = {
            characterName : item.characterName,
            serverId : server[item.serverId],
            level : item.level,
            jobName : item.jobName,
            jobGrowName : item.jobGrowName
        }
        dataArray.push(data)
    })
    //console.log(data)
    res.send(dataArray)
});
module.exports = router

