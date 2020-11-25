const request = require('request-promise');


module.exports = async function(url) {
    const server = 'https://api.neople.co.kr/df/'
    const apiKey = '&apikey=Dvn53O4pcITPMGV8N8kKHMI0ruCTaJC1'
    var options = {
        'method': 'GET',
        'url': server+url + apiKey
    };
    var obj;

    await request(options, function (error, res, body) {
        if (error) throw new Error(error);

        // r.send(obj.rows.array.forEach(element => {
        //     element.serverId,
        //     element.characterName,
        //     element.jobName,
        //     element.jobGrowName
        // }))
        obj = body
    });
    return obj
};
