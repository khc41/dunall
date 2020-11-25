const request = require('request-promise');


module.exports = async function(url) {
    const server = 'https://api.neople.co.kr/df/'
    const apiKey = 'apikey=Dvn53O4pcITPMGV8N8kKHMI0ruCTaJC1'
    var options = {
        'method': 'GET',
        'url': server+url + apiKey
    };
    var obj;

    await request(options, function (error, res, body) {
        if (error) throw new Error(error);
        obj = body
    });
    return obj
};
