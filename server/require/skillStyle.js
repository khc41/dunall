const express = require('express');
const router = express.Router();
const api = require('./api.js')
    
router.post('/', async (req, res, _) => {
    const serverId = req.body.serverId ? req.body.serverId : '';
    const characterId = req.body.characterId ? req.body.characterId : '';

    if(characterId == '' || serverId == '')
        res.send('error 0');
    
    let url = 'servers/'+ serverId +'/characters/'+characterId+'/skill/style?';
    var skill = JSON.parse(await api(url))

    let data;
    let dataArray = new Array();
    let active = new Array()
    let passive = new Array()
    
    skill.skill.style.active.forEach(function(item){
        data = {
            name: item.name,
            level: item.level,
            requiredLevel: item.requiredLevel
        }
        active.push(data)
    })
    skill.skill.style.passive.forEach(function(item){
        data = {
            name: item.name,
            level: item.level,
            requiredLevel: item.requiredLevel
        }
        passive.push(data)
    })
    
    skill.skill.style.passive.forEach(function(item){
        data = {
            active : active,
            passive: passive
        }
        dataArray.push(data)
    })


    res.send(dataArray)
});
module.exports = router