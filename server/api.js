const qs = require('querystring');
let characterName = '만복사';
//5c549c69d8f64777d47cc208e7920ee7
let url = 'https://api.neople.co.kr/df/servers/all/characters?&apikey=Dvn53O4pcITPMGV8N8kKHMI0ruCTaJC1&wordType=full&characterName='+qs.escape(characterName);
//let url = 'https://api.neople.co.kr/df/servers/cain/characters/5c549c69d8f64777d47cc208e7920ee7?apikey=Dvn53O4pcITPMGV8N8kKHMI0ruCTaJC1'
//let url = 'https://api.neople.co.kr/df/servers/cain/characters/5c549c69d8f64777d47cc208e7920ee7/timeline?limit=10&code=513&apikey=Dvn53O4pcITPMGV8N8kKHMI0ruCTaJC1'

var request = require('request');
var options = {
    'method': 'GET',
    'url': url    
};
    
request(options, function (error, response) {
    if (error) throw new Error(error);
    var obj = JSON.parse(response.body);
    console.log(obj);
});