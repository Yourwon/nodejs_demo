var mongoose = require("mongoose");
var db_url = "mongodb://localhost:27017/test";

mongoose.connect(db_url, {useNewUrlParser: true}, function (err) {
    if(err) {
        console.log('连接失败')
    } else {
        console.log('连接成功')
    }
});
// 断开数据库连接
// mongoose.disconnect(function(){ 
//     console.log('断开连接')
// });

module.exports = mongoose;
