var express = require('express');
var router = express.Router();
var mtestDao = require('../dao/MtestDao');

router.get('/mtest', async function(req, res){
    console.log("----------mtest------------");
    await mtestDao.add(req, res);
});
router.post('/ptest', async function(req, res){
    console.log("----------mtest------------");
    await mtestDao.add(req, res);
});
module.exports = router;
