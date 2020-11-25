const request = require('request');


module.exports = function(url, r) {
    const server = 'https://img-api.neople.co.kr/df/'
    const apiKey = '&apikey=Dvn53O4pcITPMGV8N8kKHMI0ruCTaJC1'
    var options = {
        'method': 'GET',
        'url': server+url + apiKey
    };
    var obj;

    request(options, function (error, res) {
        if (error) throw new Error(error);
        // obj = JSON.parse(res.body);
        r.send(res.body)
    });
};