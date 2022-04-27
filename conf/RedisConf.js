var redis = require('redis');

//redis配置
var conf = {
    url:'redis://127.0.0.1:6379'
}


var redisClient = redis.createClient(conf);
//如果有密码
//client.auth('');


module.exports = redisClient;