const express = require('express');
const router = express.Router();
const api = require('./api.js')
    
router.post('/', async (req, res, _) => {
    const serverId = req.body.serverId ? req.body.serverId : '';
    const characterId = req.body.characterId ? req.body.characterId : '';

    if(characterId == '' || serverId == '')
        res.send('error 0');
    
    var url = 'servers/'+ serverId +'/characters/'+characterId+'/skill/buff/equip/equipment?';
    var buffItem = JSON.parse(await api(url))

    var url = 'servers/'+ serverId +'/characters/'+characterId+'/skill/buff/equip/avatar?';
    var buffAvatar = JSON.parse(await api(url))

    var url = 'servers/'+ serverId +'/characters/'+characterId+'/skill/buff/equip/creature?';
    var buffCreature = JSON.parse(await api(url))

    let data;
    let equipment
    let equipments = new Array()
    let avatar
    let avatars = new Array()
    let creature
    let emblem

    buffItem.skill.buff.equipment.forEach(function(item){
        equipment = {
            itemName: item.itemName,
            itemImage: 'https://img-api.neople.co.kr/df/items/'+ item.itemId
        }
        equipments.push(equipment)
    })


    buffAvatar.skill.buff.avatar.forEach(function(item){
        emblem = {
            emblem1 : item.emblems[0] ? item.emblems[0].itemName : '',
            emblem2 : item.emblems[1] ? item.emblems[1].itemName : '',
            emblem3 : item.emblems[2] ? item.emblems[2].itemName : ''
        }
        avatar = {
            itemName: item.itemName,
            itemImage: 'https://img-api.neople.co.kr/df/items/'+ item.itemId,
            emblems : emblem
        }
        avatars.push(avatar)
    })

    buffCreature.skill.buff.creature.forEach(function(item){
        creature = {
            itemName: item.itemName,
            itemImage: 'https://img-api.neople.co.kr/df/items/'+ item.itemId
        }
    })

    data = {
        name: buffItem.skill.buff.skillInfo.name,
        level: buffItem.skill.buff.skillInfo.option.level,
        desc: buffItem.skill.buff.skillInfo.option.desc,
        values: buffItem.skill.buff.skillInfo.option.values,
        equipment: equipments,
        avatar: avatars,
        creature: creature
    }


    res.send(data)
});
module.exports = router