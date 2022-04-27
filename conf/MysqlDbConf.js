var mysql = require('mysql')

//连接配置
const dbconf = {
    host:'127.0.0.1',
    user:'root',
    password:'root',
    database:'test',
    port:'3306'
}

//创建连接池
var pool = mysql.createPool(dbconf);

//执行sql
var executeSql = function(sql, param){
    // console.log('-----sql -----'+ sql);
    console.log(param);
    //防注入mysql.format、connection.query的点位符?
    sql = mysql.format(sql, param);
    console.log(sql);
    return new Promise((resolve, reject)=>{
        pool.getConnection((err, conn) =>{

            if(err){
                console.log(err);
                reject(err);
                return;
            }
            conn.query(sql, (sqlErr, data)=>{
            // conn.query(sql, param, (sqlErr, data)=>{
                if(sqlErr){
                    reject(sqlErr);
                    return;
                }
                // console.log(data);
                resolve(data);
                conn.release();
            })
        })
    })

};

module.exports = executeSql;