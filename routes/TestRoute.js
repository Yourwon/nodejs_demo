var express = require('express');
var router = express.Router();
var testDao = require('../dao/TestDao');

var md5 = require('../util/CryptoUtil');

router.get('/querybyid', async function(req, res, next){
    testDao.queryById(req, res, next);
});

router.get('/add', async function(req, res){
    await testDao.add(req, res);
});
router.get('/add', async function(req, res){
    await testDao.add(req, res);
});
router.get('/md51', async function(req, res){
    var param = '123';
    var result = md5.md5(param);
    console.log(result);
    res.send(result);
});
router.get('/md52', async function(req, res){
    var param = '123';
    var result = md5.md5DefaultSalt(param);
    console.log(result);
    res.send(result);
});
module.exports = router;