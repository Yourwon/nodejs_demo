//加密工具类
const crypto = require('crypto');
const salt = 'hw_world!*_*';

module.exports ={
    md5:function(param){
        let md5 =crypto.createHash('md5');
        return md5.update(param).digest('hex')
    },
    md5DefaultSalt:function(param){
        const str = '${param}&${salt}';
        let md5 =crypto.createHash('md5');
        return md5.update(str).digest('hex')
    }
}